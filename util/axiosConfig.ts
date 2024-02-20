import axios from "axios";
import Cookies from "js-cookie";
export const APP_API = "https://maro-cares.onrender.com";
export const axiosInstance = axios.create({
  baseURL: APP_API,
});

const lang = Cookies.get("NEXT_LOCALE");
const token = Cookies.get("token");

axiosInstance.defaults.headers.common["authrization"] = `maroTK${token}`;
axiosInstance.defaults.headers.common["language"] = lang || "en";
