import axios from "axios"

export const IpQualityScore = async (
    link: string,
    key: string
) => {

    if (!link || link === "") {
        throw "Link not provided! || IpQualityScore.ts"
    }

    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Ip Quality Score API key is not defined";
    }

    // make a request to the Ip Quality Score API, and set the referer to the link itsphishy.xyz
    const response = await axios.get(`https://ipqualityscore.com/api/json/url/${key}/${link}`, {
        headers: {
            "Referer": "It's Phishy Package"
        }
    })

    if (response.data.unsafe ||  response.data.spam || response.data.phishing || response.data.malware) {
        return true;
    }

    return false;
}