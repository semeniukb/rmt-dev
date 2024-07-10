import axios from "axios";

export const api = axios.create({
  baseURL: "https://bytegrad.com/course-assets/projects/rmtdev/api/data",
  validateStatus: () => true,
});
