import { api } from "../instance.ts";
import type { GetJobItemsResponse } from "../../types";

export const getJobItems = (searchText: string) =>
  api.get<GetJobItemsResponse>(`?search=${searchText}`);
