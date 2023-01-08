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
exports.CheckPhish = void 0;
const axios_1 = __importDefault(require("axios"));
const CheckPhish = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || CheckPhish.ts";
    }
    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "CheckPhish API key is not defined";
    }
    const response1 = yield axios_1.default.post("https://developers.checkphish.ai/api/neo/scan", {
        headers: {
            "Referer": "It's Phishy Package",
            "Content-Type": "application/json",
        },
        apiKey: `${key}`,
        urlInfo: {
            url: link,
        },
    });
    const jobID = response1.data.jobID;
    const insights = false;
    const response2 = yield axios_1.default.post(`https://developers.checkphish.ai/api/neo/status/${jobID}`, {
        apiKey: `${key}`,
        jobID: `${jobID}`,
        insights: `${insights}`,
        headers: {
            "Referer": "It's Phishy Package",
            "Content-Type": "application/json",
        },
    });
    if (response2.data.status != "DONE") {
        // wait 10 seccounts before checking again
        yield new Promise((resolve) => setTimeout(resolve, 10000));
        const response3 = yield axios_1.default.post(`https://developers.checkphish.ai/api/neo/status/${jobID}`, {
            apiKey: `${key}`,
            jobID: `${jobID}`,
            insights: `${insights}`,
            headers: {
                "Referer": "It's Phishy Package",
                "Content-Type": "application/json",
            },
        });
        if (response3.data.disposition != "clean") {
            return true;
        }
    }
    else {
        if (response2.data.disposition != "clean") {
            return true;
        }
    }
    return false;
});
exports.CheckPhish = CheckPhish;
