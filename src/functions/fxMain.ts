import axios from "axios";

export async function fetchApiData(link) {
    return (await axios.get(`https://api.heptagrambotproject.com/scam/links/check?url=${encodeURIComponent(link)}`)).data;
}

export async function getLinkData(link) {
    let results;
    try {
        results = await fetchApiData(link);
        if (results.length === 0) {
            throw "API returned an empty array";
        } else {
            return results;
        }
    }
    catch (error) {
        throw "Error fetching data from API \n" + error;
    }
}