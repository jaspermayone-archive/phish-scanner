import axios from "axios";
export const VirusTotal = async (link, key) => {
    const checkVirusTotalAPI = await axios.get(`https://www.virustotal.com/api/v3/domains/${link}`, {
        headers: {
            "x-apikey": key,
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    if (checkVirusTotalAPI.data.data.attributes.last_analysis_stats.malicious +
        checkVirusTotalAPI.data.data.attributes.last_analysis_stats
            .suspicious >=
        2) {
        return true;
    }
    else {
        return false;
    }
};
