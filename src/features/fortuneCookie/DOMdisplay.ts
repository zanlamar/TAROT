"use strict"

import { getCookie } from "./LOGICfortune.js"
import { clearDiv, createNextCardButton, createVibeButtons  } from "../cardReading/DOMdisplay.js"
import { fortuneResponse, fortuneMessage,  } from "./TYPES.js";
import { decideFortune } from "../../index.js";


export function showCookie(data: fortuneMessage): void {
    clearDiv();

    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;
        
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Your cookie fortune'

    const cardDescription = document.createElement('p');
    cardDescription.textContent = cookie.fortune;

    // SHOW RESULT
    const div = document.createElement('div');
    div.appendChild(cardTitle);
    div.appendChild(cardDescription);
    tarotCardResponse.appendChild(div);

    tarotCardResponse.classList.add("responseContainer");
    tarotCardResponse.classList.remove("hidden");

    createNextCardButton();
    createVibeButtons();

};