import { useEffect, useState } from "react";
import { getJobItems } from "../api/requests";
import { GetJobItemsResponse, type JobItem } from "../types";

type JobItemsProps = {
  searchText: string;
};
export const useJobItems = ({ searchText }: JobItemsProps) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchText) return;

    (async function fetchJobItems() {
      try {
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

  return { jobItems, isLoading };
};
