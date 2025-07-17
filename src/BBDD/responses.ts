"use strict"

import { TarotCard, UserFeedback, CardReading } from "../types/tarot.types"


export const responses: CardReading[] = [];

export function addResponse(card: TarotCard, vibe?: UserFeedback): void {
  responses.push({
    card,
    vibe,
    timestamp: new Date().toISOString()
  });
}

export function getAllResponses(): CardReading[] {
  return responses;
}

