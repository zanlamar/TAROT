"use strict";
import { getCard } from "./features/cardReading/LOGICgetCard.js";
import { getCoordinates, getWeather } from "./features/weather/LOGICweather.js";
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    button.addEventListener("click", getCard);
});
document.addEventListener('DOMContentLoaded', async () => {
    const coordinates = await getCoordinates();
    const weather = await getWeather(coordinates.latitude, coordinates.longitude);
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    }, () => {
        getWeather(41.3851, 2.1734); // default Barcelona
    });
});
//# sourceMappingURL=index.js.map