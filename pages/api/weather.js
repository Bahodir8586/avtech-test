import { HttpRequestHub } from "./HttpRequestHub";

export const getSingleDayWeather = (dayId) => {
  const config = {
    method: "GET",
    url: `/${dayId}`,
  };
  return HttpRequestHub(config);
};

export const getMultiDayWeather = () => {
  const config = {
    method: "GET",
    url: `/`,
  };
  return HttpRequestHub(config);
};
