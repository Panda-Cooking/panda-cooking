import axios from "axios";

const api = axios.create({
    baseURL: "https://panda-cooking-api.onrender.com",
    timeout: 5000,
});

export default api;
