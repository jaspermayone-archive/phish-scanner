import axios from "axios";

export const Walshy = async (link: string) => {
    const checkWalshyAPI = await axios.post<{
      badDomain: boolean;
      detection: "discord" | "community";
    }>("https://bad-domains.walshy.dev/check", {
      domain: link,
    });

    if (checkWalshyAPI.data.badDomain) {
      return true;
    } else {
      return false;
    }
};