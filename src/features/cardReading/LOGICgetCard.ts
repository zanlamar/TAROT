"use strict"

import { TarotCardResponse, TarotCard, FortuneType } from "./TYPES.js";
import { addResponse } from "../../BBDD/responses.js";
import { clearDiv, showCard } from "./DOMdisplay.js";

export async function getCard(): Promise <FortuneType | null> {
        try {
            const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
            const data: TarotCardResponse = await res.json();
            const card: TarotCard = data.cards[0];

            const fortune: FortuneType = { type: "tarot", card };

            clearDiv();
            showCard(card);
            addResponse(fortune);

            return fortune;
                
        } catch (error) {
            console.error("Error. No card found:", error);
            return null;
        };
    };