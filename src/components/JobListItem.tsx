import BookmarkIcon from "./BookmarkIcon";
import { JobItem } from "../utils/types";

type JobListItemProps = JobItem & {
  isActive: boolean;
};

export default function JobListItem({
  title,
  company,
  daysAgo,
  badgeLetters,
  id,
  isActive,
}: JobListItemProps) {
  return (
    <li className={"job-item" + (isActive ? " job-item--active" : "")}>
      <a href={`#${id}`} className="job-item__link">
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
