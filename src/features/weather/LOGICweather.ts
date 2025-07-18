// import * as dotenv from 'dotenv'
// import dotenv from 'dotenv';
// import { config } from "dotenv";
// import { dotenv } from "dotenv";
// config();

import type { Location, Coordinates } from "./TYPES.js"

const APIKey = import.meta.env.VITE_API_KEY;
if (!APIKey) {
  throw new Error("API_KEY is missing");
}
// const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=`

const defaultLatitudeWeather: number = 41.3851;
const defaultLongitudeWeather: number = 2.1734;
const defaultCity: string ='Barcelona';


function getCurrentPositionAsync(options?: any): Promise<any> {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
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

