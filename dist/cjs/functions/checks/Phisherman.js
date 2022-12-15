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
exports.Phisherman = void 0;
const axios_1 = __importDefault(require("axios"));
// function that returns scamDetected as a boolean
const Phisherman = (link, key) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || Phisherman.ts";
    }
    // check if the key is defined, or if it is an empty string
    if (!key || key === "") {
        throw "Phisherman API key is not defined";
    }
    const checkPhishermanAPI = yield axios_1.default.get(`https://api.phisherman.gg/v2/domains/check/${link}`, {
        headers: {
            Authorization: "Bearer " + key,
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    if (checkPhishermanAPI.data.verifiedPhish) {
        return true;
    }
    else {
        return false;
    }
});
exports.Phisherman = Phisherman;
