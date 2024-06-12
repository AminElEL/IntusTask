import axios from "axios";

const createApiInstance = (options = {}) => {
    return axios.create({
        baseURL:
            "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCTeDfktJf4X_zNb4LJWFneuFMbfCxdLHc",
    });
};

const googleApiInstance = createApiInstance();

export default googleApiInstance;
