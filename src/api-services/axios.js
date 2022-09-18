import axios from "axios";
import { config } from "../config";
const baseURL = config.tmdb_base_url;
const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

apiClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    console.log("apiClient response", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { apiClient };
