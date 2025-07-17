"use strict"

import { TarotCardResponse, TarotCard, UserFeedback, CardReading } from "./types/tarot.types.js";
import { addResponse, responses, getAllResponses } from "./BBDD/responses.js";

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector("#getCard") as HTMLButtonElement;
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    button.addEventListener("click", getCard);
    
    async function getCard(): Promise <void> {
        try {
            const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
            const data: TarotCardResponse = await res.json();
            const card: TarotCard = data.cards[0];
            console.log(data);
            clearDiv();
            showCard(data);
                
        } catch(error) {
            console.error("Error. No card found:", error);
        };
    };

        function clearDiv(): void {
            tarotCardResponse.textContent = '';
            tarotIntro.classList.add("hidden");
        };
        

        function showCard(data: TarotCard): void {
                
            const card = data.cards[0];
            responses.push(card);
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

            createVibeButtons(card);
        };
            
        function createVibeButtons(card: TarotCard) : void {

            const divButtons = document.createElement('div');
            divButtons.id = "buttonContainer"
            divButtons.classList.add("divButtons");

            const vibes: UserFeedback[] = ["PAST", "PRESENT", "FUTURE"];

            // const divButtons = document.getElementById("buttonContainer");
            const buttonPast = document.createElement('button');
            
            buttonPast.innerText = "Reflects my past";
            buttonPast.classList.add("vibeButtons");
            buttonPast.id = "PAST";
            buttonPast.addEventListener("click", () => addResponse(card, "PAST"));

            const buttonPresent = document.createElement('button');
            buttonPresent.innerText = "Reflects my present";
            buttonPresent.classList.add("vibeButtons");
            buttonPresent.addEventListener("click", getCard);
            buttonPresent.id = "PRESENT";
            buttonPresent.addEventListener("click", () => addResponse(card, "PRESENT"));

            const buttonFuture = document.createElement('button');
            buttonFuture.innerText = "Reflects my future";
            buttonFuture.classList.add("vibeButtons");
            buttonFuture.addEventListener("click", getCard);
            buttonFuture.id = "FUTURE";
            buttonFuture.addEventListener("click", () => addResponse(card, "FUTURE"));

            divButtons.appendChild(buttonPast);
            divButtons.appendChild(buttonPresent);
            divButtons.appendChild(buttonFuture);
            tarotCardResponse.appendChild(divButtons);
        };

});

