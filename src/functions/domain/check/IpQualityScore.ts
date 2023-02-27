import axios from "axios"

export const IpQualityScore = async (
    domain: string,
    key: string
) => {

    if (!domain || domain === "") {
        throw "Domain not provided! || IpQualityScore.ts"
    }

    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Ip Quality Score API key is not defined";
    }

    // make a request to the Ip Quality Score API, and set the referer to the domain itsphishy.xyz
    const response = await axios.get(`https://ipqualityscore.com/api/json/url/${key}/${domain}`, {
        headers: {
            "Referer": "It's Phishy Package"
        }
    })

    // if (response.data.unsafe ||  response.data.spam || response.data.phishing || response.data.malware) {

    if (!response.data) throw new Error("IpQualityScore API returned no data");
    return response.data;
}