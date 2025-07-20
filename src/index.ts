
"use strict"

import { TarotCardResponse, TarotCard, UserFeedback, CardReading } from "./features/cardReading/TYPES.js";
import { addResponse, responses, addVibe, getAllResponses } from "./BBDD/responses.js";
import { getCard } from "./features/cardReading/LOGICgetCard.js"

import { getCoordinates, getWeather } from "./features/weather/LOGICweather.js";
import { printWeather } from "./features/weather/DOMdisplay.js";
import { getCookie } from "./features/fortuneCookie/LOGICfortune.js";



document.addEventListener('DOMContentLoaded', async() => {
    const coordinates = await getCoordinates();
    const weather = await getWeather(coordinates.latitude, coordinates.longitude);
    if (!weather) return;

    printWeather(weather);

});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#getCard") as HTMLButtonElement;
    button.addEventListener("click", decideFortune)
    
});

export function decideFortune() {
    const random = Math.random() < 0.2;

    try {
        (random)? getCookie() : getCard();
    } catch (error) {
        console.error(error);
    }

}







