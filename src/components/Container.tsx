import Sidebar from "./Sidebar.tsx";
import JobItemContent from "./JobItemContent.tsx";

export default function Container({ jobItems, isLoading }: any) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
