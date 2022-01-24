import Image from "next/image";
const WeatherComponent = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full bg-white rounded-md border shadow-lg h-64 px-5 py-3 cursor-pointer transition duration-200 hover:shadow-xl hover:scale-105">
      <div className="text-2xl text-center font-semibold">{data?.time}</div>
      <div className="text-center">
        <Image
          src={"/vercel.svg"}
          alt={"weather type"}
          width={140}
          height={160}
        />
      </div>
      <div className="font-medium text-xl text-center">{data?.temperature}</div>
    </div>
  );
};

export default WeatherComponent;
