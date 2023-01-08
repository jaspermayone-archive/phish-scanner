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
exports.IpQualityScore = void 0;
const axios_1 = __importDefault(require("axios"));
const IpQualityScore = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || IpQualityScore.ts";
    }
    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Ip Quality Score API key is not defined";
    }
    // make a request to the Ip Quality Score API, and set the referer to the link itsphishy.xyz
    const response = yield axios_1.default.get(`https://ipqualityscore.com/api/json/url/${key}/${link}`, {
        headers: {
            "Referer": "It's Phishy Package"
        }
    });
    if (response.data.unsafe || response.data.spam || response.data.phishing || response.data.malware) {
        return true;
    }
    return false;
});
exports.IpQualityScore = IpQualityScore;
