"use strict";
import { getCard } from "./features/cardReading/LOGICgetCard.js";
import { getCoordinates, getWeather } from "./features/weather/LOGICweather.js";
import { printWeather } from "./features/weather/DOMdisplay.js";
import { getCookie } from "./features/fortuneCookie/LOGICfortune.js";
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    button.addEventListener("click", getCard);
    button.addEventListener("click", getCookie);
});
document.addEventListener('DOMContentLoaded', async () => {
    const coordinates = await getCoordinates();
    const weather = await getWeather(coordinates.latitude, coordinates.longitude);
    if (!weather)
        return;
    printWeather(weather);
});
//# sourceMappingURL=index.js.map