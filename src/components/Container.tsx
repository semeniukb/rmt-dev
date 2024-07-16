import Sidebar from "./Sidebar.tsx";
import JobItemContent from "./JobItemContent.tsx";
import type { JobItem } from "../utils/types";

type ContainerProps = {
  jobItems: JobItem[];
  isLoading: boolean;
  numberOfJobItems: number;
  currentPage: number;
  numberOfPages: number;
  onChangePage: (direction: "next" | "previous") => void;
};
export default function Container({
  jobItems,
  isLoading,
  numberOfJobItems,
  currentPage,
  numberOfPages,
  onChangePage,
}: ContainerProps) {
  return (
    <div className="container">
      <Sidebar
        jobItems={jobItems}
        isLoading={isLoading}
        numberOfJobItems={numberOfJobItems}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onChangePage={onChangePage}
      />
      <JobItemContent />
    </div>
  );
}
