import { useEffect, useState } from "react";
import { getJobItem, getJobItems } from "../api/requests";
import type {
  GetJobDetailsResponse,
  GetJobItemsResponse,
  JobDetails,
  JobItem,
} from "../types";

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
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    (async function fetchJobItems() {
      try {
        setIsLoading(true);

        const response = await getJobItems(searchText);
        const data: GetJobItemsResponse = response.data;

        setJobItems(data.jobItems);
      } catch (error) {
        console.error("Error fetching job items:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchText]);

  return [jobItemsSliced, isLoading] as const;
};

export const useJobItem = (activeId: number | null) => {
  const [jobItem, setJobItem] = useState<JobDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!activeId) return;

    (async function fetchJobItem() {
      try {
        setIsLoading(true);

        const response = await getJobItem(activeId);
        const data: GetJobDetailsResponse = response.data;

        setJobItem(data.jobItem);
      } catch (error) {
        console.error("Error fetching job item:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [activeId]);

  return [jobItem, isLoading] as const;
};
