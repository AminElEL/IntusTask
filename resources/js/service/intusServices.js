import { googleSafeBrowsingBody } from "../utils/helper";
import googleApiInstance from "../utils/googleApiService.js";
import intusApiInstance from "../utils/intusApiService.js";

export const handleSaveUrl = async (url) => {
    const payload = {
        url: url,
    };
    const response = await intusApiInstance.post("/hash-url", payload);
    return response;
};
export const getSavedUrl = async (url) => {
    const payload = {
        url: url,
    };
    const response = await intusApiInstance.post("/original-url", payload);
    return response;
};

export const handleCheckSafetyUrl = async (url) => {
    googleSafeBrowsingBody["threatInfo"]["threatEntries"] = [{ url }];
    const response = await googleApiInstance.post("", googleSafeBrowsingBody);
    return response;
};
