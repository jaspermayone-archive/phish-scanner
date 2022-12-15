import axios from "axios";
export const GoogleSafeBrowsing = async (link, key) => {
    if (!link || link === "") {
        throw "Link not provided! || GoogleSafeBrowsing.ts";
    }
    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Google Safe Browsing API key is not defined";
    }
    // make a request to the Google Safe Browsing API, and set the referer to the link itsfishy.xyz
    const response = await axios.post(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${key}`, {
        "client": {
            "clientId": "itsfishy.xyz",
            "clientVersion": "1.0.0"
        },
        "threatInfo": {
            "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [
                { "url": link }
            ]
        }
    }, {
        headers: {
            "Referer": "https://itsfishy.xyz"
        }
    });
    if (Object.keys(response.data).length > 0) {
        return true;
    }
    else {
        return false;
    }
};
