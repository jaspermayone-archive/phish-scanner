import axios from "axios";

export const Internal = async (link: string) => {
  if (!link || link === "") {
    throw "Link not provided! || Internal.ts";
  }

  const linkResponse = await axios.get(
    `https://api.itsphishy.xyz/link/check?link=${link}`,
    {
      headers: {
        Referer: "It's Phishy Package",
        "Content-Type": "application/json",
      },
    }
  );

  const domainResponse = await axios.get(
    `https://api.itsphishy.xyz/domain/check?domain=${link}`,
    {
      headers: {
        Referer: "It's Phishy Package",
        "Content-Type": "application/json",
      },
    }
  );

  if (linkResponse.data.isScam || domainResponse.data.isScam) {
    return true;
  } else {
    return false;
  }
};
