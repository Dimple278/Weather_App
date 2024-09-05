export interface IData {
  location: { name: string };
  current: {
    temp_c: number;
    temp_f: number;
    condition: { text: string; icon: string; code: number };
    wind_kph: number;
    wind_mph: number;
    cloud: number;
    humidity: number;
  };
}
