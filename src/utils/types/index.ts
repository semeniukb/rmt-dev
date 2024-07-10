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
