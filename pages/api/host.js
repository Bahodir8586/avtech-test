import axios from "axios";

export let host = "";
export let port = "";

export let headers = {
  "Content-Type": "application/json; charset=utf-8",
};

export let axiosInstance = axios.create({
  baseURL: port ? `${host}:${port}/api/` : `${host}/api/`,
  headers,
});

export const HttpRequestHub = (config = null) => {
  return axiosInstance(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response) {
        return err.response;
      }
      return null;
    });
};
