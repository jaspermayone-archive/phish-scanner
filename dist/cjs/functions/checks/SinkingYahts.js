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
exports.SinkingYahts = void 0;
const axios_1 = __importDefault(require("axios"));
const SinkingYahts = (link) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || SinkingYahts.ts";
    }
    const checkSinkingYahts = yield axios_1.default.get(`https://phish.sinking.yachts/v2/check/${link}`, {
        headers: {
            accept: "application/json",
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    if (checkSinkingYahts.data) {
        return true;
    }
    else {
        return false;
    }
});
exports.SinkingYahts = SinkingYahts;
