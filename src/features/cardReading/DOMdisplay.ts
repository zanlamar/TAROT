"use strict"

import { TarotCard, UserFeedback } from "./TYPES.js";
import { responses, addVibe } from "../../BBDD/responses.js"
import { getCard } from "./LOGICgetCard.js";
import { decideFortune } from "../../index.js";

export function clearDiv(): void {
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;
    tarotCardResponse.textContent = '';
    tarotIntro.classList.add("hidden");
};

export function showCard(card: TarotCard): void {
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;
        
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
};

export function createNextCardButton(card: TarotCard) : void {

    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    const buttonAgain = document.createElement('button');
    buttonAgain.innerText = "Try again"
    buttonAgain.classList.add("button");
    buttonAgain.classList.add("button");
    buttonAgain.addEventListener("click", decideFortune);

    tarotCardResponse.appendChild(buttonAgain);
};

export function createVibeButtons(card: TarotCard): void {
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;

    const divButtons = document.createElement('div');
    divButtons.id = "buttonContainer";
    divButtons.classList.add("divButtons");

    const vibes: UserFeedback[] = ["PAST", "PRESENT", "FUTURE"];

    vibes.forEach((vibe) => {
        const button = document.createElement('button');
        button.innerText = `Reflects my ${vibe}`;
        button.classList.add("vibeButtons");
        button.id = vibe;
        button.addEventListener("click", () => addVibe(vibe));
        divButtons.appendChild(button);
    });

    tarotCardResponse.appendChild(divButtons);
}