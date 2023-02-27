import axios from "axios";

export const Walshy = async (domain: string) => {
  const checkWalshyAPI = await axios.post<{
    badDomain: boolean;
    detection: "discord" | "community";
  }>("https://bad-domains.walshy.dev/check", {
    domain: domain,
  });

  if (!checkWalshyAPI.data) throw new Error("Walshy API returned no data");
  return checkWalshyAPI.data;
};
