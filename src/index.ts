
"use strict"

import { TarotCardResponse, TarotCard, UserFeedback, CardReading } from "./features/cardReading/TYPES.js";
import { addResponse, responses, addVibe, getAllResponses } from "./BBDD/responses.js";
import { getCard } from "./features/cardReading/LOGICgetCard.js"

import { getCoordinates, getWeather } from "./features/weather/LOGICweather.js";



document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.querySelector("#getCard") as HTMLButtonElement;
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    button.addEventListener("click", getCard);

});

document.addEventListener('DOMContentLoaded', async() => {
    const coordinates = await getCoordinates();
    const weather = await getWeather(coordinates.latitude, coordinates.longitude);
    if (!weather) return;

    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
      },
      () => {
        getWeather(41.3851, 2.1734); // default Barcelona
        printWeather();
      }
    );


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
      <img src="${iconURL}" alt="${weather.current.condition.text}" style:"small"/>
      `;
    }
});





