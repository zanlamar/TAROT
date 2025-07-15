"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector("#getCard");
    const tarotCardResponse = document.getElementById("responseContainer");
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
    }
});
//# sourceMappingURL=index.js.map