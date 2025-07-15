"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById("getCard");
    const tarotCardResponse = document.getElementById("responseContainer");

    button.addEventListener("click", getCard);

    function getCard() {
        console.log("Botón clicado, haciendo fetch...");
        fetch('https://tarotapi.dev/api/v1/cards/random?n=1')
        .then(res => res.json())
        .then(data => console.log(data));
    }
});