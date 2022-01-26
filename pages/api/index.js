import { HttpRequestHub } from "./host";
import { API_KEY, city, units } from "../../constants";

// export const getSingleDayWeather = (dayId) => {
//   const config = {
//     method: "GET",
//     url: `/weather?q=${city}&appid=${API_KEY}&units=${units}`,
//   };
//   return HttpRequestHub(config);
// };

export const getMultiDayWeather = () => {
  const config = {
    method: "GET",
    url: `/forecast?q=${city}&appid=${API_KEY}&cnt=5&units=${units}`,
  };
  return HttpRequestHub(config);
};
