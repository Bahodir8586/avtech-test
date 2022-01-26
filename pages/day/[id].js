import Head from "next/head";
import WeatherComponent from "../../components/WeatherComponent";
import { useEffect, useState } from "react";
import { getMultiDayWeather } from "../api";
import { useRouter } from "next/router";

export default function Day() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const router = useRouter();
  const currentDayId = router.query.id;
  useEffect(() => {
    getMultiDayWeather().then((res) => {
      setData(res.data?.list);
      setDate(res.data?.list[currentDayId * 8]?.dt_txt.split(" ")[0]);
    });
  }, [currentDayId]);
  return (
    <div>
      <Head>
        <title>Weather application</title>
        <meta name="description" content="Avtech company test application" />
      </Head>
      <h1 className="text-center text-3xl font-semibold my-12">
        Weather Forecast for {date}
      </h1>
      <div className="flex flex-wrap container mx-auto justify-between">
        {data?.map((el, index) => {
          const dayId = (index / 8).toFixed();
          if (dayId > currentDayId + 1 || dayId < currentDayId) {
            return;
          }
          return (
            <div key={index} className="m-4">
              <WeatherComponent data={el} hourly={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
