import { fetchApiData } from "./fetchApiData";

export async function getLinkData(link) {
    let results;
    try {
        results = await fetchApiData(link);
        if (results.length === 0) {
            throw "API returned an empty array";
        } else {
            return results;
        }
    } catch (error) {
        throw "Error fetching data from API \n" + error;
    }
}