import axios from "axios";

const createApiInstance = (options = {}) => {
    return axios.create({
        baseURL: "http://127.0.0.1:8000",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    });
};

const intusApiInstance = createApiInstance();

export default intusApiInstance;
