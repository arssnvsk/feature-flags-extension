import {Environment} from "../types";

export const mapOptionsFromString = (input?: string): Array<Environment> => {
    try {
        const options = JSON.parse(input ?? '')
        return options
    } catch (e) {
        console.error('Error fetching environment options:', e);
        return [];
    }
}