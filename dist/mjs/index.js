import { GoogleSafeBrowsing } from "./functions/checks/GoogleSafeBrowsing";
import { Phisherman } from "./functions/checks/Phisherman";
import { SinkingYahts } from "./functions/checks/SinkingYahts";
import { UrlScan } from "./functions/checks/UrlScan";
import { VirusTotal } from "./functions/checks/VirusTotal";
import { Walshy } from './functions/checks/Walshy';
import { IpQualityScore } from "./functions/checks/IpQualityScore";
import { CheckPhish } from "./functions/checks/CheckPhish";
import { Internal } from "functions/checks/Internal";
export async function PhishScanner(link, keys) {
    if (!link || link === "") {
        throw "Link not provided! Please provide a link to check.";
    }
    const internal = await Internal(link);
    if (internal) {
        return true;
    }
    if (keys.phisherman) {
        const phisherman = await Phisherman(link, keys.phisherman);
        if (phisherman) {
            return true;
        }
    }
    // check if safebrowsing key is present
    if (keys.googleSafeBrowsing) {
        const googleSafeBrowsing = await GoogleSafeBrowsing(link, keys.googleSafeBrowsing);
        if (googleSafeBrowsing) {
            return true;
        }
    }
    if (keys.urlScan) {
        const urlScan = await UrlScan(link, keys.urlScan);
        if (urlScan) {
            return true;
        }
    }
    if (keys.virusTotal) {
        const virusTotal = await VirusTotal(link, keys.virusTotal);
        if (virusTotal) {
            return true;
        }
    }
    if (keys.ipQualityScore) {
        const ipQualityScore = await IpQualityScore(link, keys.ipQualityScore);
        if (ipQualityScore) {
            return true;
        }
    }
    if (keys.checkPhish) {
        const checkPhish = await CheckPhish(link, keys.checkPhish);
        if (checkPhish) {
            return true;
        }
    }
    // DIV LINE
    const walshy = await Walshy(link);
    if (walshy) {
        return true;
    }
    const sinkingYahts = await SinkingYahts(link);
    if (sinkingYahts) {
        return true;
    }
    return false;
}
