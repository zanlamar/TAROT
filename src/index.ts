"use strict"

import { TarotCard } from "./types/tarot.types.js";

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector("#getCard") as HTMLButtonElement;
    const tarotCardResponse = document.getElementById("responseContainer") as HTMLDivElement;
    const tarotIntro = document.getElementById("titleContainer") as HTMLDivElement;

    button.addEventListener("click", getCard);

    async function getCard(): Promise <void> {
        try {
            const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
            const data: TarotCard = await res.json();
                console.log(data);
                clearDiv();
                showCard(data);
        } catch(error) {
                console.error("Error. No card found:", error);
        };


    function clearDiv(): void {
        tarotCardResponse.textContent = '';
        tarotIntro.classList.add("hidden");
    }

    function showCard(data: TarotCard ) {
        
        const card = data.cards[0];

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


        // CREAR DIV DE BOTONES
        // pendiente darle estilo
        const divButtons = document.createElement('div');
        divButtons.classList.add("divButtons");


        const buttonPast = document.createElement('button');
        buttonPast.innerText = "Reflects my past";
        buttonPast.classList.add("vibeButtons");


        const buttonPresent = document.createElement('button');
        buttonPresent.innerText = "Reflects my present";
        buttonPresent.classList.add("vibeButtons");


        const buttonFuture = document.createElement('button');
        buttonFuture.innerText = "Reflects my future";
        buttonFuture.classList.add("vibeButtons");


        divButtons.appendChild(buttonPast);
        divButtons.appendChild(buttonPresent);
        divButtons.appendChild(buttonFuture);
        tarotCardResponse.appendChild(divButtons);




        // BUTTON AGAIN
        const buttonAgain = document.createElement('button');
        buttonAgain.innerText = "Try again... if you dare"
        buttonAgain.classList.add("button");
        buttonAgain.classList.add("button");
        buttonAgain.addEventListener("click", getCard);

        tarotCardResponse.appendChild(buttonAgain);
    };
    };
});
