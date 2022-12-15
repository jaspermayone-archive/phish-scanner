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
exports.VirusTotal = void 0;
const axios_1 = __importDefault(require("axios"));
const VirusTotal = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    const checkVirusTotalAPI = yield axios_1.default.get(`https://www.virustotal.com/api/v3/domains/${link}`, {
        headers: {
            "x-apikey": key,
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    if (checkVirusTotalAPI.data.data.attributes.last_analysis_stats.malicious +
        checkVirusTotalAPI.data.data.attributes.last_analysis_stats
            .suspicious >=
        2) {
        return true;
    }
    else {
        return false;
    }
});
exports.VirusTotal = VirusTotal;
