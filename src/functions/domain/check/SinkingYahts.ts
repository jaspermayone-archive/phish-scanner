import axios from "axios";

export const SinkingYahts = async (
  domain: string,
) => {

    if (!domain || domain === "") {
        throw "Link not provided! || SinkingYahts.ts"
    }

    const checkSinkingYahts = await axios.get<boolean>(
      `https://phish.sinking.yachts/v2/check/${domain}`,
      {
        headers: {
          accept: "application/json",
          "X-Identity": "phish-scanner (NPM package)",
        },
      }
    );

    if (!checkSinkingYahts.data) throw new Error("SinkingYahts API returned no data");
    return checkSinkingYahts.data;
  }