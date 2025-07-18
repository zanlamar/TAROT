"use strict";
import { getCard } from "./features/cardReading/LOGICgetCard.js";
import { getCoordinates } from "./features/weather/LOGICweather.js";
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    button.addEventListener("click", getCard);
});
console.log(getCoordinates());
//# sourceMappingURL=index.js.map