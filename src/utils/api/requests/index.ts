import { api } from "../instance.ts";
import type { GetJobItemsResponse, GetJobDetailsResponse } from "../../types";

export const getJobItems = (searchText: string) =>
  api.get<GetJobItemsResponse>(`?search=${searchText}`);

export const getJobItem = (id: number) =>
  api.get<GetJobDetailsResponse>(`/${id}`);
