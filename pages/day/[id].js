import Head from "next/head";
import WeatherComponent from "../../components/WeatherComponent";

export default function Day({ data }) {
  return (
    <div>
      <Head>
        <title>Weather application</title>
        <meta name="description" content="Avtech company test application" />
      </Head>
      <h1 className="text-center text-3xl font-semibold my-12">
        Weather Forecast for {data?.name}
      </h1>
      {/* <div className="flex container mx-auto justify-between">
        {data?.hourly.map((el) => (
          <div key={el.id} className="w-full mx-4">
            <WeatherComponent data={el} hourly={true} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
