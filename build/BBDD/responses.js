"use strict";
export const responses = [];
export function addResponse(card, vibe) {
    responses.push({
        card,
        vibe,
        timestamp: new Date().toISOString()
    });
}
;
export function addVibe(vibe) {
    const lastCard = responses[responses.length - 1];
    lastCard.vibe = vibe;
    console.log(lastCard);
}
;
export function getAllResponses() {
    return responses;
}
;
//# sourceMappingURL=responses.js.map