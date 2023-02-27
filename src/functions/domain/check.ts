import { Keys } from "../../types/keys";
import { Walshy } from "./check/Walshy";
import { VirusTotal } from "./check/VirusTotal";
import { UrlScan } from "./check/UrlScan";
import { SinkingYahts } from "./check/SinkingYahts";
import { Phisherman } from "./check/Phisherman";
import { IpQualityScore } from "./check/IpQualityScore";
import { GoogleSafeBrowsing } from "./check/GoogleSafeBrowsing";
import { CheckPhish } from "./check/CheckPhish";
import { Internal } from "./check/Internal";

export async function checkDomain(domain: string, keys: Keys) {

  let scamClass: Boolean

  const checkPhishKey = keys.checkPhish;
  const googleSafeBrowsingKey = keys.googleSafeBrowsing;
  const ipQualityScoreKey = keys.ipQualityScore;
  const phishermanKey = keys.phisherman;
  const urlScanKey = keys.urlScan;
  const virusTotalKey = keys.virusTotal;

  let checkPhishResults: any;
  let googleSafeBrowsingResults: any;
  let ipQualityScoreResults: any;
  let phishermanResults: any;
  let urlScanResults: any;
  let virusTotalResults: any;
  let internalResults: any;
  let sinkingYahtsResults: any;
  let walshyResults: any;

  if (checkPhishKey) {
    checkPhishResults = await CheckPhish(domain, checkPhishKey);
  }

  if (googleSafeBrowsingKey) {
    googleSafeBrowsingResults = await GoogleSafeBrowsing(
      domain,
      googleSafeBrowsingKey
    );
  }

  if (ipQualityScoreKey) {
    ipQualityScoreResults = await IpQualityScore(domain, ipQualityScoreKey);
  }

  if (phishermanKey) {
    phishermanResults = await Phisherman(domain, phishermanKey);
  }

  if (urlScanKey) {
    urlScanResults = await UrlScan(domain, urlScanKey);
  }

  if (virusTotalKey) {
    virusTotalResults = await VirusTotal(domain, virusTotalKey);
  }

  internalResults = await Internal(domain);
  sinkingYahtsResults = await SinkingYahts(domain);
  walshyResults = await Walshy(domain);

  const results = {
    isScam: scamClass,
    apiResults: {
      checkPhish: checkPhishResults || "No key provided",
      googleSafeBrowsing: googleSafeBrowsingResults || "No key provided",
      ipQualityScore: ipQualityScoreResults || "No key provided",
      phisherman: phishermanResults || "No key provided",
      urlScan: urlScanResults || "No key provided",
      virusTotal: virusTotalResults || "No key provided",
      internal: internalResults,
      sinkingYahts: sinkingYahtsResults,
      waslhy: walshyResults,
    },
  };

  return results;
}
