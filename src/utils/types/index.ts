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

export type JobDetails = {
  badgeLetters: string;
  company: string;
  companyURL: string;
  coverImgURL: string;
  daysAgo: number;
  description: string;
  duration: string;
  id: number;
  location: string;
  qualifications: string[];
  relevanceScore: number;
  reviews: string[];
  salary: string;
  title: string;
};

export type GetJobDetailsResponse = {
  jobItem: JobDetails;
  public: boolean;
};
