import JobListItem from "./JobListItem.tsx";

export function JobList() {
  return (
    <ul className="job-list">
      <JobListItem />
      <JobListItem />
      <JobListItem />
      <JobListItem />
    </ul>
  );
}

export default JobList;
