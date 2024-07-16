export type JobItem = {
  id: number;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
  badgeLetters: string;
};

export type GetJobItemsResponse = {
  jobItems: JobItem[];
  public: boolean;
  sorted: boolean;
};

export type JobItemExpanded = JobItem & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};

export type GetJobDetailsResponse = {
  jobItem: JobItemExpanded;
  public: boolean;
};
