export type Location = {
    latitude: number,
    longitude: number,
    city?: string
}

export interface Coordinates {
  latitude: number,
  longitude: number,
    city?: string
}


export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
  wind_kph: number;
  humidity: number;
}

// interface LocationInfo {
//   name: string;
//   region: string;
//   country: string;
//   lat: number;
//   lon: number;
//   localtime: string;
// }

export interface WeatherAPIResponse {
  location: Location;
  current: CurrentWeather;
}

