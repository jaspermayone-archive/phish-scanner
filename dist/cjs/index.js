"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhishScanner = void 0;
const GoogleSafeBrowsing_1 = require("./functions/checks/GoogleSafeBrowsing");
const Phisherman_1 = require("./functions/checks/Phisherman");
const SinkingYahts_1 = require("./functions/checks/SinkingYahts");
const UrlScan_1 = require("./functions/checks/UrlScan");
const VirusTotal_1 = require("./functions/checks/VirusTotal");
const Walshy_1 = require("./functions/checks/Walshy");
const IpQualityScore_1 = require("./functions/checks/IpQualityScore");
const CheckPhish_1 = require("./functions/checks/CheckPhish");
const SpenTK_1 = require("./functions/checks/SpenTK");
function PhishScanner(link, keys) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!link || link === "") {
            throw "Link not provided! Please provide a link to check.";
        }
        if (keys.phisherman) {
            const phisherman = yield (0, Phisherman_1.Phisherman)(link, keys.phisherman);
            if (phisherman) {
                return true;
            }
        }
        // check if safebrowsing key is present
        if (keys.googleSafeBrowsing) {
            const googleSafeBrowsing = yield (0, GoogleSafeBrowsing_1.GoogleSafeBrowsing)(link, keys.googleSafeBrowsing);
            if (googleSafeBrowsing) {
                return true;
            }
        }
        if (keys.urlScan) {
            const urlScan = yield (0, UrlScan_1.UrlScan)(link, keys.urlScan);
            if (urlScan) {
                return true;
            }
        }
        if (keys.virusTotal) {
            const virusTotal = yield (0, VirusTotal_1.VirusTotal)(link, keys.virusTotal);
            if (virusTotal) {
                return true;
            }
        }
        if (keys.ipQualityScore) {
            const ipQualityScore = yield (0, IpQualityScore_1.IpQualityScore)(link, keys.ipQualityScore);
            if (ipQualityScore) {
                return true;
            }
        }
        if (keys.checkPhish) {
            const checkPhish = yield (0, CheckPhish_1.CheckPhish)(link, keys.checkPhish);
            if (checkPhish) {
                return true;
            }
        }
        // DIV LINE
        const spenTK = yield (0, SpenTK_1.SpenTK)(link);
        if (spenTK) {
            return true;
        }
        const walshy = yield (0, Walshy_1.Walshy)(link);
        if (walshy) {
            return true;
        }
        const sinkingYahts = yield (0, SinkingYahts_1.SinkingYahts)(link);
        if (sinkingYahts) {
            return true;
        }
        return false;
    });
}
exports.PhishScanner = PhishScanner;
