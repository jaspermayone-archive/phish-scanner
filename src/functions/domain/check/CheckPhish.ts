import axios from "axios";

export const CheckPhish = async (domain: string, key: string) => {
    if (!domain || domain === "") {
        throw "Link not provided! || CheckPhish.ts";
    }

    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "CheckPhish API key is not defined";
    }

    const response1 = await axios.post("https://developers.checkphish.ai/api/neo/scan", {
        headers: {
            "Referer": "It's Phishy Package",
            "Content-Type": "application/json",
        },
        apiKey: `${key}`,
        urlInfo: {
            url: domain,
        },

    });

    const jobID = response1.data.jobID;
    const insights = false;

    const response2 = await axios.post(`https://developers.checkphish.ai/api/neo/status/${jobID}`, {
        apiKey: `${key}`,
        jobID: `${jobID}`,
        insights: `${insights}`,
        headers: {
            "Referer": "It's Phishy Package",
            "Content-Type": "application/json",
        },
    });

    if (response2.data.status != "DONE") {

// wait 10 seccounts before checking again
        await new Promise((resolve) => setTimeout(resolve, 10000));

        const response3 = await axios.post(`https://developers.checkphish.ai/api/neo/status/${jobID}`, {
            apiKey: `${key}`,
            jobID: `${jobID}`,
            insights: `${insights}`,
            headers: {
                "Referer": "It's Phishy Package",
                "Content-Type": "application/json",
            },
        });

        if (response3.data.disposition != "clean") {
            return true;
        }

    } else {
        if (response2.data.disposition != "clean") {
            return true;
        }
    }

    if (!response2.data) throw new Error("CheckPhish API returned no data");
    return response2.data;
}