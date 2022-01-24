import Head from "next/head";
import Link from "next/link";
import WeatherComponent from "../components/WeatherComponent";

export async function getServerSideProps() {
  // TODO: fetch weather data there
  return {
    props: {
      data: [
        { id: 1, time: "WED", temperature: "78" },
        { id: 2, time: "WED", temperature: "78" },
        { id: 3, time: "WED", temperature: "78" },
        { id: 4, time: "WED", temperature: "78" },
        { id: 5, time: "WED", temperature: "78" },
      ],
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
          <div key={el.id} className="w-full mx-4">
            <WeatherComponent data={el} />
          </div>
        ))}
      </div>
    </div>
  );
}
