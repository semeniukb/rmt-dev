import JobListItem from "./JobListItem.tsx";
import { JobItem } from "../utils/types";
import Spinner from "./Spinner.tsx";
import { useActiveId } from "../utils/hooks";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: JobListProps) {
  const activeId = useActiveId();

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map((jobItem: JobItem) => (
          <JobListItem
            key={jobItem.id}
            isActive={activeId === jobItem.id}
            {...jobItem}
          />
        ))}
    </ul>
  );
}

export default JobList;
