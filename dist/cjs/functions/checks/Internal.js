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
exports.Internal = void 0;
const axios_1 = __importDefault(require("axios"));
const Internal = (link) => __awaiter(void 0, void 0, void 0, function* () {
    if (!link || link === "") {
        throw "Link not provided! || Internal.ts";
    }
    const linkResponse = yield axios_1.default.get(`https://api.itsphishy.xyz/link/check?link=${link}`, {
        headers: {
            Referer: "It's Phishy Package",
            "Content-Type": "application/json",
        },
    });
    const domainResponse = yield axios_1.default.get(`https://api.itsphishy.xyz/domain/check?domain=${link}`, {
        headers: {
            Referer: "It's Phishy Package",
            "Content-Type": "application/json",
        },
    });
    if (linkResponse.data.isScam || domainResponse.data.isScam) {
        return true;
    }
    else {
        return false;
    }
});
exports.Internal = Internal;
