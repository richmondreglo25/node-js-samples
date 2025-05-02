import stringUtils from "./stringUtils.js"

const stringToJson = (jsonString, configName) => {
    if (stringUtils.isBlank(jsonString)) {
        throw new Error(`${configName} is either null, undefined or empty.`);
    }

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error(`${configName} is not a valid JSON String. ${error.stack}`);
    }
}

// Export defaults.
export default {
    stringToJson
}