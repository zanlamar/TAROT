// tipos globales

export { TarotCard};

interface TarotCard {
    nhits: number
    cards : [{ 
        desc: string, 
        meaning_rev: string,
        meaning_up: string,
        name: string,    
        name_short: string,
        type: string,
        value: string,
        value_int: number
    }],
};

// interface APIResponse {
//     cards: TarotCard[];
// }