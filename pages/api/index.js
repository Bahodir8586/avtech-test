import { HttpRequestHub } from "./host";

export const getSingleDayWeather = (dayId) => {
  const config = {
    method: "GET",
    url: `/getWeather/${dayId}`,
  };
  return HttpRequestHub(config);
};

export const getMultiDayWeather = () => {
  const config = {
    method: "GET",
    url: `/getWeather`,
  };
  return HttpRequestHub(config);
};
