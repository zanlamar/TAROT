// import * as dotenv from 'dotenv'
// import dotenv from 'dotenv';
// import { config } from "dotenv";
// import { dotenv } from "dotenv";
// config();

import type { Location, Coordinates, WeatherAPIResponse, WeatherCondition, CurrentWeather } from "./TYPES.js"
const APIKey = import.meta.env.VITE_API_KEY;


const defaultLatitudeWeather: number = 41.3851;
const defaultLongitudeWeather: number = 2.1734;
const defaultCity: string ='Barcelona';


function getCurrentPositionAsync(options?: any): Promise<any> {
    
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    });
}

export async function getCoordinates(): Promise<Coordinates>  {
    try {
        const position = await getCurrentPositionAsync();
        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        };
    } catch (error) {
        return {
            latitude: defaultLatitudeWeather,
            longitude: defaultLongitudeWeather,
            city: defaultCity,
        };
    }
}


const requestConfig = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}


export async function getWeather(latitude: number, longitude: number): Promise<WeatherAPIResponse | undefined> {
    if (!APIKey) {
        throw new Error("API_KEY is missing");
    };
    
    const WEATHER_URL = "https://api.weatherapi.com/v1/current.json"
    const query = `${latitude},${longitude}`;
    const url = `${WEATHER_URL}?key=${APIKey}&q=${query}`;

    try {
        const response = await fetch(url, requestConfig);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data: WeatherAPIResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting the weather", error);
    }
};
    