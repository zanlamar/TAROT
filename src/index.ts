
"use strict"

import { TarotCardResponse, TarotCard, UserFeedback, CardReading } from "./features/cardReading/TYPES.js";
import { addResponse, responses, addVibe, getAllResponses } from "./BBDD/responses.js";
import { getCard } from "./features/cardReading/LOGICgetCard.js"

import { getCoordinates } from "./features/weather/LOGICweather.js";



document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.querySelector("#getCard") as HTMLButtonElement;
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    button.addEventListener("click", getCard);

});

console.log(getCoordinates());



