import Forecast from "./Forecast";
import TodayCard from "./TodayCard";

interface ForecastDay {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface PageContentProps {
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
    forecast?: {
      forecastday: ForecastDay[];
    };
  };
}

const PageContent: React.FC<PageContentProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-3 w-full p-6 rounded-md">
      <TodayCard data={data} />
      <div
        className="grid 
        grid-cols-2 
         
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-7
        
        gap-4
        mt-4"
      >
        {data?.forecast?.forecastday.map((day, index) => (
          <Forecast key={index} data={day} />
        ))}
      </div>
    </div>
  );
};

export default PageContent;
