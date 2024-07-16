import { useEffect, useState } from "react";
import { getJobItem, getJobItems } from "../api/requests";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils.ts";

export const useActiveId = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = Number(window.location.hash.slice(1));
      setActiveId(id);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
};

export const useJobItems = (searchText: string) => {
  const { data, isInitialLoading } = useQuery({
    queryKey: ["job-items", searchText],
    queryFn: async () => {
      const response = await getJobItems(searchText);

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.data.jobItems;
    },
    onError: handleError,
    staleTime: 1000 * 60 * 60,
    enabled: !!searchText,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { jobItems: data, isLoading: isInitialLoading } as const;
};

export const useJobItem = (activeId: number | null) => {
  const { data, isInitialLoading } = useQuery({
    queryKey: ["job-item", activeId],
    queryFn: async () => {
      if (!activeId) return;
      const response = await getJobItem(activeId);

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
    },
    onError: handleError,
    enabled: !!activeId,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const jobItem = data?.jobItem;
  const isLoading = isInitialLoading;

  return [jobItem, isLoading] as const;
};

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
