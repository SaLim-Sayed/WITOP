"use server";
import axios from "axios";
import { cookies } from "next/headers";

const createAxiosInstance = (baseURL?: string) => {
  const lang = cookies().get("NEXT_LOCALE")?.value;
  const token = cookies().get("token")?.value;
  const config = {
    baseURL: baseURL || "https://maro-cares.onrender.com",
    headers: {
      language: lang || "en",
      Authorization: `Bearer ${token || "123"}`,
    },
  };

  return axios.create(config);
};

export const useServerRequest = async ({
  endPoint,
  isCashing,
  base,
  body,
  method,
}: {
  endPoint: string;
  isCashing?: boolean;
  base?: string;
  body?: any;
  method: string;
}) => {
  try {
    const activeAxios = createAxiosInstance();
    // Use type assertion here
    const response = await (activeAxios as any)[method](endPoint);

    return response.data as any;
  } catch (error) {
    // Handle error (e.g., log it)
    throw error;
  }
};
