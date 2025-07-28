"use strict"

import { fortuneResponse, FortuneType } from "./TYPES.js";
import { addResponse } from "../../BBDD/responses.js";
import { showCookie, clearDiv } from "../fortuneCookie/DOMdisplay.js"
 
const APIKeyCookie = import.meta.env.VITE_API_COOKIE_KEY;

const requestConfigCookie = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: APIKeyCookie
    },
}


export async function getCookie(): Promise <FortuneType | null> {
    if (!APIKeyCookie) {
        throw new Error("API_KEY_COOKIE is missing");
    };
    
    const COOKIE_URL = "https://api.erensko.xyz/v1/random-fortune"
    const url = `${COOKIE_URL}?${APIKeyCookie}=&=`

    try {
        const response = await fetch(url, requestConfigCookie);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data: fortuneResponse = await response.json();
            // console.log(data.fortune);

            const fortune: FortuneType = { type: "cookie", fortune: data.fortune };

            clearDiv();
            showCookie(data);
            addResponse(fortune);

        return fortune;

    } catch (error) {
        console.error("Error getting the weather", error);
        return null
    }
};