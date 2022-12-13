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
exports.UrlScan = void 0;
var axios_1 = __importDefault(require("axios"));
var UrlScan = function (link, key) { return __awaiter(void 0, void 0, void 0, function () {
    var checkSerch, scan_1, scanResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get("https://urlscan.io/api/v1/search/?q=domain:".concat(link), {
                    headers: {
                        "API-Key": process.env.URLSCAN_API_KEY,
                        "X-Identity": "phish-scanner (NPM package)",
                    },
                })];
            case 1:
                checkSerch = _a.sent();
                if (!(checkSerch.data.results.length === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, axios_1.default.post("https://urlscan.io/api/v1/scan/", {
                        url: link,
                    }, {
                        headers: {
                            "API-Key": process.env.URLSCAN_API_KEY,
                            "X-Identity": "phish-scanner (NPM package)",
                        },
                    })];
            case 2:
                scan_1 = _a.sent();
                // wait 15 seconds for the scan to finish
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var scanResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, axios_1.default.get("https://urlscan.io/api/v1/result/".concat(scan_1.data.uuid, "/"), {
                                    headers: {
                                        "API-Key": key,
                                        "X-Identity": "phish-scanner (NPM package)",
                                    },
                                })];
                            case 1:
                                scanResult = _a.sent();
                                if (scanResult.data.verdicts.malicious) {
                                    return [2 /*return*/, true];
                                }
                                else {
                                    return [2 /*return*/, false];
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, 15000);
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, axios_1.default.get("https://urlscan.io/api/v1/result/".concat(checkSerch.data.results[0].task.uuid, "/"), {
                    headers: {
                        "API-Key": key,
                        "X-Identity": "phish-scanner (NPM package)",
                    },
                })];
            case 4:
                scanResult = _a.sent();
                if (scanResult.data.verdicts.malicious) {
                    return [2 /*return*/, true];
                }
                else {
                    return [2 /*return*/, false];
                }
                _a.label = 5;
            case 5: return [2 /*return*/, false];
        }
    });
}); };
exports.UrlScan = UrlScan;
//# sourceMappingURL=UrlScan.js.map