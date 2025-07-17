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
import { addResponse } from "../../BBDD/responses.js";
import { clearDiv, showCard } from "./DOMdisplay.js";
export function getCard() {
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
//# sourceMappingURL=LOGICgetCard.js.map