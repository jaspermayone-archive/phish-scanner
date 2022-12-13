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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPhish = void 0;
var axios_1 = __importDefault(require("axios"));
var CheckPhish = function (link, key) { return __awaiter(void 0, void 0, void 0, function () {
    var response1, jobID, insights, response2, response3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!link || link === "") {
                    throw "Link not provided! || CheckPhish.ts";
                }
                // check if the key is defined, or if it is an empty string
                if (!key || key === "") {
                    throw "CheckPhish API key is not defined";
                }
                return [4 /*yield*/, axios_1.default.post("https://developers.checkphish.ai/api/neo/scan", {
                        headers: {
                            "Referer": "https://itsfishy.xyz",
                            "Content-Type": "application/json",
                        },
                        apiKey: "".concat(key),
                        urlInfo: {
                            url: link,
                        },
                    })];
            case 1:
                response1 = _a.sent();
                jobID = response1.data.jobID;
                insights = false;
                return [4 /*yield*/, axios_1.default.post("https://developers.checkphish.ai/api/neo/status/".concat(jobID), {
                        apiKey: "".concat(key),
                        jobID: "".concat(jobID),
                        insights: "".concat(insights),
                        headers: {
                            "Referer": "https://itsfishy.xyz",
                            "Content-Type": "application/json",
                        },
                    })];
            case 2:
                response2 = _a.sent();
                if (!(response2.data.status != "DONE")) return [3 /*break*/, 5];
                // wait 10 seccounts before checking again
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10000); })];
            case 3:
                // wait 10 seccounts before checking again
                _a.sent();
                return [4 /*yield*/, axios_1.default.post("https://developers.checkphish.ai/api/neo/status/".concat(jobID), {
                        apiKey: "".concat(key),
                        jobID: "".concat(jobID),
                        insights: "".concat(insights),
                        headers: {
                            "Referer": "https://itsfishy.xyz",
                            "Content-Type": "application/json",
                        },
                    })];
            case 4:
                response3 = _a.sent();
                if (response3.data.disposition != "clean") {
                    return [2 /*return*/, true];
                }
                return [3 /*break*/, 6];
            case 5:
                if (response2.data.disposition != "clean") {
                    return [2 /*return*/, true];
                }
                _a.label = 6;
            case 6: return [2 /*return*/, false];
        }
    });
}); };
exports.CheckPhish = CheckPhish;
//# sourceMappingURL=CheckPhish.js.map