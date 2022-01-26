import Head from "next/head";
import Link from "next/link";
import WeatherComponent from "../components/WeatherComponent";
import { useEffect, useState } from "react";
import { getMultiDayWeather } from "./api";

export default function Home() {
  const [data, setData] = useState({});
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
      <div className="flex container mx-auto justify-between">
        {data?.map((el) => (
          <Link key={el.dt} href={`/day/${el.dt}`} passHref>
            <div className="w-full mx-4">
              <WeatherComponent data={el} hourly={false} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
