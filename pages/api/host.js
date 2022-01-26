import axios from "axios";

export let host = "https://api.openweathermap.org/data/2.5/";
export let port = "";

export let headers = {
  "Content-Type": "application/json; charset=utf-8",
};

export let axiosInstance = axios.create({
  baseURL: port ? `${host}:${port}/` : `${host}/`,
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
