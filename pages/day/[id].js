import Head from "next/head";
import WeatherComponent from "../../components/WeatherComponent";
import { mockdata } from "../../mocks/data";
import { getSingleDayWeather } from "../api";

export async function getServerSideProps({ params }) {
  getSingleDayWeather(params.id).then((res) => {
    if (res.status === 200) {
      return {
        props: {
          data: [...res.data],
        },
      };
    }
  });
  const data = mockdata.find((el) => el.id.toString() === params.id);
  return {
    props: {
      data: { ...data },
    },
  };
}

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
      <div className="flex container mx-auto justify-between">
        {data?.hourly.map((el) => (
          <div key={el.id} className="w-full mx-4">
            <WeatherComponent data={el} hourly={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
