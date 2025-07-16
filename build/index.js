"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
    const tarotIntro = document.getElementById("titleContainer");
    button.addEventListener("click", getCard);
    function getCard() {
        fetch('https://tarotapi.dev/api/v1/cards/random?n=1')
            .then(res => res.json())
            .then(data => {
            console.log(data);
            clearDiv();
            showCard(data);
        })
            .catch(error => {
            console.error("Error. No card found:", error);
        });
    }
    function clearDiv() {
        tarotCardResponse.textContent = '';
        tarotIntro.classList.add("hidden");
    }
    function showCard(data) {
        const card = data.cards[0];
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = card.name;
        const cardDescription = document.createElement('p');
        cardDescription.textContent = card.meaning_up;
        const div = document.createElement('div');
        div.appendChild(cardTitle);
        div.appendChild(cardDescription);
        tarotCardResponse.appendChild(div);
        tarotCardResponse.classList.add("responseContainer");
        tarotCardResponse.classList.remove("hidden");
        const buttonAgain = document.createElement('button');
        buttonAgain.innerText = "Try again... if you dare";
        buttonAgain.classList.add("button");
        buttonAgain.classList.add("button");
        buttonAgain.addEventListener("click", getCard);
        tarotCardResponse.appendChild(buttonAgain);
    }
});
//# sourceMappingURL=index.js.map