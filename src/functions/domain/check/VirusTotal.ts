import axios from "axios";

export const VirusTotal = async (domain: string, key: string) => {
  const checkVirusTotalAPI = await axios.get<{
    data: {
      attributes: {
        last_analysis_stats: {
          malicious: number;
          suspicious: number;
          timeout: number;
          undetected: number;
        };
      };
    };
  }>(`https://www.virustotal.com/api/v3/domains/${domain}`, {
    headers: {
      "x-apikey": key,
      "X-Identity": "phish-scanner (NPM package)",
    },
  });

  if (!checkVirusTotalAPI.data)
    throw new Error("VirusTotal API returned no data");
  return checkVirusTotalAPI.data;
};
