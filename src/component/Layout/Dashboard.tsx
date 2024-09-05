import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import WeatherDisplay from "../Molecules/WeatherDisplay";
import useApi from "../Hooks/useApi";
import Sidebar from "./Sidebar";
import DashboardHeader from "../Molecules/DashboardHeader";
import { WeatherType } from "../data/WeatherType";

const Dashboard = () => {
  const [query, setQuery] = useState<string | null>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const { data, error } = useApi(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&q=${query}`
  );

  const handleClick = useCallback((search: string) => {
    setQuery(search);
  }, []);

  const backgroundImage = useMemo(() => {
    if (data) {
      const weatherCode = data.current.condition.code;
      const backgroundKey = Object.keys(WeatherType).find((key) =>
        WeatherType[key as keyof typeof WeatherType].includes(weatherCode)
      );
      return backgroundKey ? `url(backgrounds/${backgroundKey}.jpg)` : null;
    }
    return null;
  }, [data]);

  useEffect(() => {
    if (dashboardRef.current && backgroundImage) {
      dashboardRef.current.style.backgroundImage = backgroundImage;
    }
  }, [backgroundImage]);

  return (
    <main className="dashboard-wrapper" ref={dashboardRef}>
      <DashboardHeader handleClick={handleClick} />
      <div className="dashboard flex">
        <WeatherDisplay data={data} />
        <Sidebar data={data} error={error} />
      </div>
    </main>
  );
};

export default Dashboard;
