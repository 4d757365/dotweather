import { MdLocationPin } from "react-icons/md";
import { IoPartlySunny } from "react-icons/io5";
import { getCurrentDate } from "@/lib/utils";
import Image from "next/image";

interface TodayCardProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
      temp_c: number;
      wind_mph: number;
      wind_kph: number;
      humidity: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}
const TodayCard: React.FC<TodayCardProps> = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <div className="flex flex-col flex-2 w-4/5 items-start group cursor-pointer rounded-xl border p-6 space-y-4">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">dotweather</h1>
        </div>
        <div>
          <p className="font-semibold text-3xl">Today</p>
          <p className="text-md mt-1">{currentDate}</p>
        </div>
      </div>
      <div className="flex justify-evenly w-full">
        <div>
          <p className="text-5xl flex gap-x-2">
            {data?.current?.temp_f}{" "}
            <span className="text-xl font-semibold">&deg; F</span>
            {"/ "}
            {data?.current?.temp_c}{" "}
            <span className="text-xl font-semibold">&deg; C</span>
          </p>
        </div>
        <div className="hidden md:flex flex-col">
          <div>
            <p className="text-2xl font-semibold">
              {data?.current?.condition.text}
            </p>
          </div>
          <img
            src={`https:${weatherIcon}`}
            alt="condition"
            width={64}
            height={64}
          />
          {/* <Image
            src={`https:${weatherIcon}`}
            height={64}
            width={64}
            alt="condition"
          /> */}
        </div>
        <div className="space-y-2 flex flex-col justify-center">
          <p className="text-xl truncate">
            {" "}
            Wind: {data?.current?.wind_kph} km/h / {data?.current?.wind_mph} mph
          </p>
          <p className="text-xl truncate">
            {" "}
            Humidity: {data?.current?.humidity} %
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <MdLocationPin color />
        <span>
          {data?.location?.name}, {data?.location?.region}
        </span>
      </div>
    </div>
  );
};

export default TodayCard;
