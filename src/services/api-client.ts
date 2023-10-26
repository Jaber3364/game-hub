import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponce<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
    key: "5772d834b92d48f3a1d9d49f5d537098",
  },
});

class APIClient<T>{
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponce<T>>(this.endpoint, config).then(res => res.data);
  }
}

export default APIClient;