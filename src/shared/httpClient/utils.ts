export const getCurrentTabOrigin = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const queryInfo = {
            active: true,
            currentWindow: true
        };

        chrome.tabs.query(queryInfo, function(tabs) {
            const tab = tabs[0];
            const url = tab.url;
            if (url) {
                const parsedURL = new URL(url);
                resolve(parsedURL.origin.replace('cap.', ''))
            }
            reject()
        });
    })
}