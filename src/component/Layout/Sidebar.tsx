import Text from "../Atomic/Text";
import { IData } from "../Interface/IData";
import { IError } from "../Interface/IError";
import SidebarItem from "../Molecules/SidebarItem";
import Alert from "../utils/Alert";

const Sidebar = (props: { data: IData | null; error: IError | null }) => {
  const { data, error } = props;
  return (
    <div className="dashboard__sidebar flex flex-col">
      <Text type="p">Weather Details...</Text>

      <div className="sidebar__value flex flex-col">
        <Text type="h3">{data?.current.condition.text}</Text>
        <SidebarItem
          title="Temperature"
          value={data?.current.temp_c.toString() + "°C"}
          src="temp.svg"
        />
        <SidebarItem
          title="Humidity"
          value={data?.current.humidity.toString() + "%"}
          src="humid.svg"
        />
        <SidebarItem
          title="Cloudy"
          value={data?.current.cloud.toString() + "%"}
          src="cloudy.png"
        />
        <SidebarItem
          title="Wind Speed"
          value={data?.current.wind_kph.toString() + "km/h"}
          src="wind.svg"
        />
        {error && <Alert message={error.message} type="error" />}
      </div>
    </div>
  );
};

export default Sidebar;
