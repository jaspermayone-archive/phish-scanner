import axios from "axios";

export const UrlScan = async (domain: string, key: string) => {
  const checkSerch = await axios.get(
    `https://urlscan.io/api/v1/search/?q=domain:${domain}`,
    {
      headers: {
        "API-Key": process.env.URLSCAN_API_KEY,
        "X-Identity": "phish-scanner (NPM package)",
      },
    }
  );

  // check if the link is not already scanned
  if (checkSerch.data.results.length === 0) {
    // if not scan the link, providing the api key
    const scan = await axios.post(
      "https://urlscan.io/api/v1/scan/",
      {
        url: domain,
      },
      {
        headers: {
          "API-Key": process.env.URLSCAN_API_KEY,
          "X-Identity": "phish-scanner (NPM package)",
        },
      }
    );

    // wait 15 seconds for the scan to finish
    setTimeout(async () => {
      const scanResult = await axios.get(
        `https://urlscan.io/api/v1/result/${scan.data.uuid}/`,
        {
          headers: {
            "API-Key": key,
            "X-Identity": "phish-scanner (NPM package)",
          },
        }
      );

      if (!scanResult.data) throw new Error("UrlScan API returned no data");
      return scanResult.data;
    }, 15000);
  } else {
    const scanResult = await axios.get(
      `https://urlscan.io/api/v1/result/${checkSerch.data.results[0].task.uuid}/`,
      {
        headers: {
          "API-Key": key,
          "X-Identity": "phish-scanner (NPM package)",
        },
      }
    );

    if (!scanResult.data) throw new Error("UrlScan API returned no data");
    return scanResult.data;
  }
};
