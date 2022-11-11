import { getLinkData } from "./functions/fxMain";

export async function PhishScanner(link: string): Promise<boolean> {

    // check the heptagram api
    const results = await getLinkData(link);
    // check if scamDetected is true
    if (results.scamDetected) {
        // if true, return the results
        return true;
    } else {
        // if false, return a message saying the link is not a scam
        return false;
    }
}