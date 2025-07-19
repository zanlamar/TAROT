
import { WeatherAPIResponse } from "./TYPES";

export function printWeather(weather: WeatherAPIResponse): void {
    
    const divlocation = document.getElementById("weatherLocation") as HTMLDivElement;
    const divtemperature = document.getElementById("weatherTemperature")as HTMLDivElement;
    const divcondition = document.getElementById("weatherCondition") as HTMLDivElement;

    if (divlocation) {
      divlocation.textContent = weather.location.name;
    }

    if (divtemperature) {
      divtemperature.textContent = `${weather.current.temp_c}°C`;
    }

    if (divcondition) {
      const iconURL = `https:${weather.current.condition.icon}`;
      divcondition.innerHTML = `
      <img src="${iconURL}" alt="${weather.current.condition.text}" style="width: 24px; vertical-align: middle;"/>
      `;
    }
}