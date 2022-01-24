import Image from "next/image";
const WeatherComponent = ({ data, hourly }) => {
  console.log(data);
  return (
    <div className="w-full bg-white rounded-md border shadow-lg h-72 px-5 py-3 cursor-pointer transition duration-200 hover:shadow-xl hover:scale-105">
      <div className="text-2xl text-center font-semibold">{data?.name}</div>
      <div className="text-center">
        <Image
          src={`/${data.status}.jpeg`}
          alt={"weather type"}
          width={140}
          height={160}
        />
      </div>
      <div className="font-medium text-xl text-center">
        {hourly ? (
          <span>{data?.temperature}&#176;C</span>
        ) : (
          <>
            <span>{data?.temperature[0]}&#176;C</span> / &nbsp;
            <span>{data?.temperature[1]}&#176;C</span>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;
