"use strict";
import { addResponse } from "../../BBDD/responses.js";
import { clearDiv, showCard } from "./DOMdisplay.js";
export async function getCard() {
    try {
        const res = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
        const data = await res.json();
        const card = data.cards[0];
        console.log("test");
        console.log(data);
        clearDiv();
        showCard(card);
        addResponse({ type: "tarot", card });
    }
    catch (error) {
        console.error("Error. No card found:", error);
    }
    ;
}
;
//# sourceMappingURL=LOGICgetCard.js.map