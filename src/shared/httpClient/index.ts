import axios from "axios";
import { getCurrentTabOrigin } from "./utils";


export const httpClient = axios.create({
    baseURL: await getCurrentTabOrigin(),
});

httpClient.interceptors.request.use(
    (config) => {
        config.headers.origin = '*';

        return config;
    }
);
export type { HTTPClientResponse } from './types';
export { getCurrentTabOrigin } from './utils'

function originWithId(header: chrome.webRequest.HttpHeader) {
    return header.name.toLowerCase() === 'origin' &&
        (header.value?.indexOf('moz-extension://') === 0 ||
            header.value?.indexOf('chrome-extension://') === 0);
}

chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        const filteredHeaders = details.requestHeaders?.filter(x => !originWithId(x));
        console.log("Original Headers:", details.requestHeaders);
        console.log("Filtered Headers:", filteredHeaders);
        return { requestHeaders: filteredHeaders };
    },
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
);