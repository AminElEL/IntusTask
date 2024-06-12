export let googleSafeBrowsingBody = {
    client: {
        clientId: "intustest",
        clientVersion: "268681988111",
    },
    threatInfo: {
        threatTypes: [
            "MALWARE",
            "SOCIAL_ENGINEERING",
            "THREAT_TYPE_UNSPECIFIED",
            "UNWANTED_SOFTWARE",
            "POTENTIALLY_HARMFUL_APPLICATION",
        ],
        platformTypes: ["ALL_PLATFORMS"],
        threatEntryTypes: ["URL"],
        threatEntries: [],
    },
};

export const checkIsValidURL = (url) => {
    const regex = new RegExp(
        "^(https|http)?://[a-z0-9]+(?:[-.][a-z0-9]+)*(?::[0-9]{1,5})?(?:/[^/\r\n]+)*.[a-z]{2,5}(?:[?#]S*)?",
        "gmi"
    );
    return regex.test(url);
};
