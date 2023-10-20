import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

const apiConnect = {
    login: { url: "/user/login", method: "post", auth: false },
    signUp: {  url: "/user/signup",method: "post", auth: false },
    profilePost: { url: "/user/profile",method: "post", auth: true },
    profilePut: { url: "/user/profile",method: "put",  auth: true },
};

export const callAPI = async (connect, token, data = {}) => {
    const { method, url, auth } = apiConnect[connect];

    const headers = {
        "Content-Type": "application/json",
        //use  spread  to add the last pararmeter to the object
        ...(auth && { Authorization: `Bearer ${token}` }),
    };

    try {
        const response = await axios({
            method,
            url: `${baseURL}${url}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error connecting to API :", error);
        throw error;
    }
};

export default callAPI;
