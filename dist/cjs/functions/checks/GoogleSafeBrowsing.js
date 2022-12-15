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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSafeBrowsing = void 0;
const axios_1 = __importDefault(require("axios"));
const GoogleSafeBrowsing = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || GoogleSafeBrowsing.ts";
    }
    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Google Safe Browsing API key is not defined";
    }
    // make a request to the Google Safe Browsing API, and set the referer to the link itsfishy.xyz
    const response = yield axios_1.default.post(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${key}`, {
        "client": {
            "clientId": "itsfishy.xyz",
            "clientVersion": "1.0.0"
        },
        "threatInfo": {
            "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [
                { "url": link }
            ]
        }
    }, {
        headers: {
            "Referer": "https://itsfishy.xyz"
        }
    });
    if (Object.keys(response.data).length > 0) {
        return true;
    }
    else {
        return false;
    }
});
exports.GoogleSafeBrowsing = GoogleSafeBrowsing;
