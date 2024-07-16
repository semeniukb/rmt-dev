import ResultsCount from "./ResultsCount.tsx";
import SortingControls from "./SortingControls.tsx";
import JobList from "./JobList.tsx";
import PaginationControls from "./PaginationControls.tsx";
import type { JobItem } from "../utils/types";

type SidebarProps = {
  jobItems: JobItem[];
  isLoading: boolean;
  numberOfJobItems: number;
  currentPage: number;
  numberOfPages: number;
  onChangePage: (direction: "next" | "previous") => void;
};

export default function Sidebar({
  jobItems,
  isLoading,
  numberOfJobItems,
  currentPage,
  numberOfPages,
  onChangePage,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount numberOfJobItems={numberOfJobItems} />
        <SortingControls />
      </div>
      <JobList jobItems={jobItems} isLoading={isLoading} />

      <PaginationControls
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onChangePage={onChangePage}
      />
    </div>
  );
}
