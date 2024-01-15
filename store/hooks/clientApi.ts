import axios from "axios";
import Cookies from "js-cookie";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const createAxiosInstance = (baseURL?: string) => {
  const config = {
    baseURL: baseURL || "https://maro-cares.onrender.com/",
    headers: {
       
      "language": Cookies.get("NEXT_LOCALE") || "ar",
      // Authorization: "",
    },
  };

  return axios.create(config);
};

export const useGetter = ({
  endPoint,
  key,
  timer,
  revalidateTime: revalidateTime,
  base,
}: {
  endPoint: string;
  key: string;
  timer?: number;
  revalidateTime?: number;
  base?: string;
}) =>
  useQuery({
    queryKey: [key],
    staleTime: timer || Infinity,
    retry: revalidateTime,
    queryFn: async () => {
      try {
        const req = await createAxiosInstance(base).get(endPoint);
        return req.data.data;
      } catch (error) {
        // Handle error (e.g., log it)
        throw error;
      }
    },
  });

export const useSetter = ({
  endPoint,
  key,
  retry,
  base,
}: {
  endPoint: string;
  key: string;
  retry?: number;
  base?: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [key],
    retry,
    mutationFn: async (data: any) => {
      try {
        const response = await createAxiosInstance(base).post(endPoint, data);
        queryClient.invalidateQueries({ queryKey: [key] });
        return response.data;
      } catch (error) {
        // Handle error (e.g., log it)
        throw error;
      }
    },
  });
};
