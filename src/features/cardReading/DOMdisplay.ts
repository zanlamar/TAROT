"use strict"

import { TarotCard, UserFeedback } from "./TYPES.js";
import { responses, addVibe } from "../../BBDD/responses.js"
import { getCard } from "./LOGICgetCard.js";

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
    buttonAgain.addEventListener("click", getCard);

    tarotCardResponse.appendChild(buttonAgain);
};
    
export function createVibeButtons(card: TarotCard) : void {

    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    const divButtons = document.createElement('div');
    divButtons.id = "buttonContainer"
    divButtons.classList.add("divButtons");
    
    const vibes: UserFeedback[] = ["PAST", "PRESENT", "FUTURE"];
    
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
};