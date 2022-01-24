import Head from "next/head";
import Link from "next/link";
import WeatherComponent from "../components/WeatherComponent";
import { mockdata } from "../mocks/data";
import { getMultiDayWeather } from "./api";

export async function getServerSideProps() {
  getMultiDayWeather().then((res) => {
    if (res.status === 200) {
      return {
        props: {
          data: [...res.data],
        },
      };
    }
  });
  return {
    props: {
      data: [...mockdata],
    },
  };
}

export default function Home({ data }) {
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
        {data.map((el) => (
          <Link key={el.id} href={`/day/${el.id}`} passHref>
            <div className="w-full mx-4">
              <WeatherComponent data={el} hourly={false} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
