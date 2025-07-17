"use strict";
import { responses, addVibe } from "../../../BBDD/responses.js";
import { getCard } from "../logic/getCard.js";
export function clearDiv() {
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    tarotCardResponse.textContent = '';
    tarotIntro.classList.add("hidden");
}
;
export function showCard(card) {
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    console.log(responses);
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = card.name;
    const cardDescription = document.createElement('p');
    cardDescription.textContent = card.meaning_up;
    // SHOW RESULT
    const div = document.createElement('div');
    div.appendChild(cardTitle);
    div.appendChild(cardDescription);
    tarotCardResponse.appendChild(div);
    tarotCardResponse.classList.add("responseContainer");
    tarotCardResponse.classList.remove("hidden");
    createNextCardButton(card);
    createVibeButtons(card);
}
;
export function createNextCardButton(card) {
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    const buttonAgain = document.createElement('button');
    buttonAgain.innerText = "Try again... if you dare";
    buttonAgain.classList.add("button");
    buttonAgain.classList.add("button");
    buttonAgain.addEventListener("click", getCard);
    tarotCardResponse.appendChild(buttonAgain);
}
;
export function createVibeButtons(card) {
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    const divButtons = document.createElement('div');
    divButtons.id = "buttonContainer";
    divButtons.classList.add("divButtons");
    const vibes = ["PAST", "PRESENT", "FUTURE"];
    const buttonPast = document.createElement('button');
    buttonPast.innerText = "Reflects my past";
    buttonPast.classList.add("vibeButtons");
    buttonPast.id = "PAST";
    buttonPast.addEventListener("click", () => addVibe("PAST"));
    const buttonPresent = document.createElement('button');
    buttonPresent.innerText = "Reflects my present";
    buttonPresent.classList.add("vibeButtons");
    buttonPresent.id = "PRESENT";
    buttonPresent.addEventListener("click", () => addVibe("PRESENT"));
    const buttonFuture = document.createElement('button');
    buttonFuture.innerText = "Reflects my future";
    buttonFuture.classList.add("vibeButtons");
    buttonFuture.id = "FUTURE";
    buttonFuture.addEventListener("click", () => addVibe("FUTURE"));
    divButtons.appendChild(buttonPast);
    divButtons.appendChild(buttonPresent);
    divButtons.appendChild(buttonFuture);
    tarotCardResponse.appendChild(divButtons);
}
;
//# sourceMappingURL=DOMdisplay.js.map