
export interface TarotCardResponse {
  nhits: number;
  cards: TarotCard[];
}

export interface TarotCard {
  desc: string, 
  meaning_rev: string,
  meaning_up: string,
  name: string,    
  name_short: string,
  type: string,
  value: string,
  value_int: number
};


export type UserFeedback = "PAST" | "PRESENT" | "FUTURE";


export type FortuneType = 
  | { type: "tarot", card: TarotCard }
  | { type: "cookie", fortune: string };

export interface CardReading {
    reading: FortuneType;
    vibe?: UserFeedback;
    timestamp: string;
};
