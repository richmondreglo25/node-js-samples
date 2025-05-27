import stringUtils from "./stringUtils"

// Export defaults.
export default {
    stringToJson: (jsonString: string, configName: string) => {
        if (stringUtils.isBlank(jsonString)) {
            throw new Error(`${configName} is either null, undefined or empty.`);
        }

        try {
            return JSON.parse(jsonString);
        } catch (error: any) {
            throw new Error(`${configName} is not a valid JSON String.`);
        }
    }
}