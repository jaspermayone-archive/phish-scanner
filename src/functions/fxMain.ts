import redis from 'redis';
import axios from "axios";


let redisClient;

(async () => {
    redisClient = redis.createClient();
    redisClient.on("error", (error) => console.error(`Error : ${error}`));
    await redisClient.connect();
})();

export async function fetchApiData(link) {
    const apiResponse = await axios.get(
        `https://api.heptagrambotproject.com/scam/links/check?url=${link}`
    );
    return apiResponse.data;
}

export async function getLinkData(link) {
    let results;
    let isCached = false;
    try {
        const cacheResults = await redisClient.get(link);
        if (cacheResults) {
            isCached = true;
            results = JSON.parse(cacheResults);
        } else {
            results = await fetchApiData(link);
            if (results.length === 0) {
                throw "API returned an empty array";
            }
            await redisClient.set(link, JSON.stringify(results), {
                EX: 180,
                NX: true,
            });
            return results;
        }
    } catch (error) {
        throw "Error fetching data from API \n" + error;
    }
}