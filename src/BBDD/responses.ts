"use strict"

import { TarotCard, UserFeedback, CardReading } from "../features/cardReading/TYPES"

export const responses: CardReading[] = [];

export function addResponse(card: TarotCard, vibe?: UserFeedback): void {
  responses.push({
    card,
    vibe,
    timestamp: new Date().toISOString()
  });
};

export function addVibe(vibe: UserFeedback):void {
  const lastCard = responses[responses.length - 1];
  lastCard.vibe = vibe;
  console.log(lastCard);
};

export function getAllResponses(): CardReading[] {
  return responses;
};

