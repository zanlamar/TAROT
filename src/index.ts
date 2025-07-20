
"use strict"

import { TarotCardResponse, TarotCard, UserFeedback, CardReading } from "./features/cardReading/TYPES.js";
import { addResponse, responses, addVibe, getAllResponses } from "./BBDD/responses.js";
import { getCard } from "./features/cardReading/LOGICgetCard.js"

import { getCoordinates, getWeather } from "./features/weather/LOGICweather.js";
import { printWeather } from "./features/weather/DOMdisplay.js";
import { getCookie } from "./features/fortuneCookie/LOGICfortune.js";



document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.querySelector("#getCard") as HTMLButtonElement;
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    button.addEventListener("click", getCard);
    button.addEventListener("click", getCookie);


});

document.addEventListener('DOMContentLoaded', async() => {
    const coordinates = await getCoordinates();
    const weather = await getWeather(coordinates.latitude, coordinates.longitude);
    if (!weather) return;

    printWeather(weather);

});







