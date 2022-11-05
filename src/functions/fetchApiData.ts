import axios from "axios";

export async function fetchApiData(link) {
    const apiResponse = await axios.get(
        `https://api.heptagrambotproject.com/scam/links/check?url=${link}`
    );
    return apiResponse.data;
}