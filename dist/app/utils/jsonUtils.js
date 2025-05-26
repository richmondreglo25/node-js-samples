"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = __importDefault(require("./stringUtils"));
// Export defaults.
exports.default = {
    stringToJson: (jsonString, configName) => {
        if (stringUtils_1.default.isBlank(jsonString)) {
            throw new Error(`${configName} is either null, undefined or empty.`);
        }
        try {
            return JSON.parse(jsonString);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`${configName} is not a valid JSON String. ${error.stack}`);
            }
            throw error;
        }
    }
};
