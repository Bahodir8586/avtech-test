import { HttpRequestHub } from "./host";
import { API_KEY, city, units } from "../../constants";

export const getMultiDayWeather = () => {
  const config = {
    method: "GET",
    url: `/forecast?q=${city}&appid=${API_KEY}&cnt=40&units=${units}`,
  };
  return HttpRequestHub(config);
};
