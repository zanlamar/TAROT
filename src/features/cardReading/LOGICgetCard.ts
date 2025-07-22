"use strict"

import { TarotCardResponse, TarotCard, FortuneType } from "./TYPES.js";
import { addResponse } from "../../BBDD/responses.js";
import { clearDiv, showCard } from "./DOMdisplay.js";

export async function getCard(): Promise <void> {
        try {
            const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
            const data: TarotCardResponse = await res.json();
            const card: TarotCard = data.cards[0];

            clearDiv();
            showCard(card);
            addResponse({ type: "tarot", card });
                
        } catch (error) {
            console.error("Error. No card found:", error);
        };
    };