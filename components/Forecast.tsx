interface ForecastDay {
  data: {
    date: string;
    day: {
      condition: {
        icon: string;
        text: string;
      };
      maxtemp_f: number;
      mintemp_f: number;
    };
  };
}
// interface ForecastProps {
//   data: {
//     forecast?: {
//       forecastday: ForecastDay[];
//     };
//   };
// }
const moment = require("moment");
require("moment-timezone");
const Forecast = ({ data }: ForecastDay) => {
  const dateString = data.date;
  const dateUTC = new Date(dateString);
  const dateLocal = new Date(
    dateUTC.getTime() + dateUTC.getTimezoneOffset() * 60000
  );
  const weekday = dateLocal.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="flex flex-row items-center gap-x-3 cursor-pointer border hover:border-neutral-500 w-full p-2 rounded-md">
      <div
        className="relative 
      rounded-md 
      min-h-[200px] 
      min-w-[200px]
      overflow-hidden"
      >
        <div className="h-full">
          <div className="w-full flex items-center justify-center">
            <p className="text-3xl font-bold">{weekday}</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={`https:${data.day.condition.icon}`}
              alt="condition"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-center mt-4 gap-x-4">
            <p className="text-2xl">
              {data.day.maxtemp_f.toFixed()}
              <span>&deg;</span>
            </p>
            <p className="text-2xl text-neutral-400">
              {data.day.mintemp_f.toFixed()} <span>&deg;</span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p>{data.day.condition.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
