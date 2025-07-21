"use strict"

import { getCookie } from "./LOGICfortune.js"
import { fortuneResponse, fortuneMessage,  } from "./TYPES.js";
import { decideFortune } from "../../index.js";
import { UserFeedback } from "../cardReading/TYPES.js";
import { addVibe } from "../../BBDD/responses.js"

export function clearDiv(): void {
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;
    tarotCardResponse.textContent = '';
    tarotIntro.classList.add("hidden");
};


export function showCookie(data: fortuneResponse): void {

    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;
        
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Your cookie fortune:';

    const cardDescription = document.createElement('p');
    cardDescription.textContent = data.fortune;

    // SHOW RESULT
    const div = document.createElement('div');
    div.appendChild(cardTitle);
    div.appendChild(cardDescription);
    tarotCardResponse.appendChild(div);

    tarotCardResponse.classList.add("responseContainer");
    tarotCardResponse.classList.remove("hidden");

    createNextCardButton(data);
    createVibeButtons(data);

};



export function createNextCardButton(data: fortuneResponse) : void {

    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    const buttonAgain = document.createElement('button');
    buttonAgain.innerText = "Try again"
    buttonAgain.classList.add("button");
    buttonAgain.classList.add("button");
    buttonAgain.addEventListener("click", decideFortune);

    tarotCardResponse.appendChild(buttonAgain);
};
    
export function createVibeButtons(data: fortuneResponse) : void {

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