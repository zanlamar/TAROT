"use strict";
export const responses = [];
export function addResponse(card, vibe) {
    responses.push({
        card,
        vibe,
        timestamp: new Date().toISOString()
    });
}
export function getAllResponses() {
    return responses;
}
//# sourceMappingURL=responses.js.map