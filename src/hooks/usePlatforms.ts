import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../Data/platforms";
import ms from "ms";
import {Platform} from "../entites/Platform";

const apiClient = new APIClient<Platform>("/platforms/list/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 24h
    initialData: {count: platforms.length, results: platforms},
  });

export default usePlatforms;
