"use strict"

import { UserFeedback, CardReading, FortuneType } from "../features/cardReading/TYPES"

export const responses: CardReading[] = [];

export function addResponse(reading: FortuneType, vibe?: UserFeedback): void {
  responses.push({
    reading,
    vibe,
    timestamp: new Date().toISOString()
  });
  console.log(responses);
};

export function addVibe(vibe: UserFeedback):void {
  const lastCard = responses[responses.length - 1];
  lastCard.vibe = vibe;
  console.log(lastCard);
};

export function getAllResponses(): CardReading[] {
  return responses;
};

