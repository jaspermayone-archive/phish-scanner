import axios from "axios";

export const Internal = async (domain: string) => {
  if (!domain || domain === "") {
    throw "Domain not provided! || Internal.ts";
  }

  const domainResponse = await axios.get(
    `https://api.itsphishy.xyz/domain/check?domain=${domain}`,
    {
      headers: {
        Referer: "It's Phishy Package",
        "Content-Type": "application/json",
      },
    }
  );

  // if (linkResponse.data.isScam || domainResponse.data.isScam) {

  if (!domainResponse.data) throw new Error("Internal API returned no data");
  return domainResponse.data;
};
