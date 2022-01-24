import Head from "next/head";

export async function getServerSideProps({ params }) {
  // TODO: fetch weather data there
  console.log(params);
  return {
    props: {},
  };
}

export default function Day({}) {
  return (
    <div>
      <Head>
        <title>Weather application</title>
        <meta name="description" content="Avtech company test application" />
      </Head>
    </div>
  );
}
