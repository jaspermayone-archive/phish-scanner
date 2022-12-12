import { GoogleSafeBrowsing } from "./functions/GoogleSafeBrowsing"
import { Phisherman } from "./functions/Phisherman"
import { SinkingYahts } from "./functions/SinkingYahts"
import { UrlScan } from "./functions/UrlScan";
import { VirusTotal } from "./functions/VirusTotal";
import { Walshy } from './functions/Walshy';

// import keys type
import { keys } from './types/keys';


export async function PhishScanner(link: string, keys: keys  ): Promise<boolean> {

if (!link || link === "") {
    throw "Link not provided! Please provide a link to check."
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