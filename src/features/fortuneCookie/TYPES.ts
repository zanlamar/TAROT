
export interface fortuneResponse {
   fortune: string;
}

export interface fortuneMessage {
    fortune: string;

}

export type FortuneType = 
  | { type: "tarot", card: TarotCard }
  | { type: "cookie", fortune: string };


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

