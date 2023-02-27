import axios from "axios";

// function that returns scamDetected as a boolean
export const Phisherman = async (
  domain: string,
  key: string,
) => {

    if (!domain || domain === "") {
        throw "Link not provided! || Phisherman.ts"
    }

        // check if the key is defined, or if it is an empty string
        if (!key || key === "") {
            throw "Phisherman API key is not defined";
        }

    const checkPhishermanAPI = await axios.get(
      `https://api.phisherman.gg/v2/domains/check/${domain}`,
      {
        headers: {
          Authorization: "Bearer " + key,
          "X-Identity": "phish-scanner (NPM package)",
        },
      }
    );

    if (!checkPhishermanAPI.data) throw new Error("Phisherman API returned no data");
    return checkPhishermanAPI.data;
  }