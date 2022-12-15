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
exports.UrlScan = void 0;
const axios_1 = __importDefault(require("axios"));
const UrlScan = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    const checkSerch = yield axios_1.default.get(`https://urlscan.io/api/v1/search/?q=domain:${link}`, {
        headers: {
            "API-Key": process.env.URLSCAN_API_KEY,
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    // check if the link is not already scanned
    if (checkSerch.data.results.length === 0) {
        // if not scan the link, providing the api key
        const scan = yield axios_1.default.post("https://urlscan.io/api/v1/scan/", {
            url: link,
        }, {
            headers: {
                "API-Key": process.env.URLSCAN_API_KEY,
                "X-Identity": "phish-scanner (NPM package)",
            },
        });
        // wait 15 seconds for the scan to finish
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            const scanResult = yield axios_1.default.get(`https://urlscan.io/api/v1/result/${scan.data.uuid}/`, {
                headers: {
                    "API-Key": key,
                    "X-Identity": "phish-scanner (NPM package)",
                },
            });
            if (scanResult.data.verdicts.malicious) {
                return true;
            }
            else {
                return false;
            }
        }), 15000);
    }
    else {
        const scanResult = yield axios_1.default.get(`https://urlscan.io/api/v1/result/${checkSerch.data.results[0].task.uuid}/`, {
            headers: {
                "API-Key": key,
                "X-Identity": "phish-scanner (NPM package)",
            },
        });
        if (scanResult.data.verdicts.malicious) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;
});
exports.UrlScan = UrlScan;
