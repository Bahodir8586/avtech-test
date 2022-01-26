import Head from "next/head";
import Link from "next/link";
import WeatherComponent from "../components/WeatherComponent";
import { useEffect, useState } from "react";
import { getMultiDayWeather } from "./api";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMultiDayWeather().then((res) => {
      setData(res.data?.list);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Weather application</title>
        <meta name="description" content="Avtech company test application" />
      </Head>
      <h1 className="text-center text-3xl font-semibold my-12">
        Weather Forecast
      </h1>
      <div className="flex flex-wrap container mx-auto justify-between">
        {data?.map((el, index) => {
          const dayId = index % 8;
          if (dayId !== 0) {
            return;
          }
          return (
            <Link key={el.dt} href={`/day/${dayId}`} passHref>
              <div className="m-4">
                <WeatherComponent data={el} hourly={false} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
