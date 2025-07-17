"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addResponse, responses, addVibe } from "./BBDD/responses.js";
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    button.addEventListener("click", getCard);
    function getCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
                const data = yield res.json();
                const card = data.cards[0];
                console.log(data);
                clearDiv();
                showCard(card);
                addResponse(card);
            }
            catch (error) {
                console.error("Error. No card found:", error);
            }
            ;
        });
    }
    ;
    function clearDiv() {
        tarotCardResponse.textContent = '';
        tarotIntro.classList.add("hidden");
    }
    ;
    function showCard(card) {
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
    function createNextCardButton(card) {
        const buttonAgain = document.createElement('button');
        buttonAgain.innerText = "Try again... if you dare";
        buttonAgain.classList.add("button");
        buttonAgain.classList.add("button");
        // buttonAgain.addEventListener("click", () => addResponse(card));
        buttonAgain.addEventListener("click", getCard);
        tarotCardResponse.appendChild(buttonAgain);
    }
    ;
    function createVibeButtons(card) {
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
});
//# sourceMappingURL=index.js.map