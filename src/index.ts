import { getLinkData } from "./functions/fxMain";

// create main fuction
const PhishScanner = async () => {

    // sub fuction called checkLink, that takes a link as a parameter, and returns isScam as a bool
    const scam = async (link: string): Promise<boolean> => {

        // check the heptagram api
        const results = await getLinkData(link);
        // check if scamDetected is true
        if (results.scamDetected === true) {
            // if true, return the results
            return true;
        } else {
            // if false, return a message saying the link is not a scam
            return false;
        }
    }

}
// export main function
export default PhishScanner