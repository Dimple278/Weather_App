import Icon from "../Atomic/Icon";
import Text from "../Atomic/Text";
import { useState } from "react";
import { IData } from "../Interface/IData";

const WeatherDisplay = (props: { data: IData | null }) => {
  const { data } = props;
  const [isCelsius, setIsCelsius] = useState(true); // State to track Celsius or Fahrenheit

  // Function to toggle between Celsius and Fahrenheit
  const toggleTemperatureUnit = () => {
    setIsCelsius((prevUnit) => !prevUnit);
  };

  // Convert Celsius to Fahrenheit
  const toFahrenheit = (tempC: number) => ((tempC * 9) / 5 + 32).toFixed(2);

  return (
    <div className="dashboard__weatherdisplay flex align-center">
      {/* Display temperature based on isCelsius state */}
      <Text type="h1">
        {isCelsius ? data?.current.temp_c : toFahrenheit(data?.current.temp_c!)}
        °{isCelsius ? "C" : "F"}
      </Text>

      <div className="flex flex-col">
        <Text type="h2">{data?.location.name}</Text>
        <Text type="p">{data?.current.condition.text}</Text>
      </div>

      <Icon src={data?.current.condition.icon} width="70px" height="70px" />

      {/* Button to toggle between Celsius and Fahrenheit */}
      <button onClick={toggleTemperatureUnit} className="temp-toggle-button">
        Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default WeatherDisplay;
