import stringUtils from "./stringUtils.js"

// Export defaults.
export default {
    stringToJson: (jsonString, configName) => {
        console.log(jsonString)

        if (stringUtils.isBlank(jsonString)) {
            throw new Error(`${configName} is either null, undefined or empty.`);
        }

        try {
            return JSON.parse(jsonString);
        } catch (error) {
            throw new Error(`${configName} is not a valid JSON String. ${error.stack}`);
        }
    }
}