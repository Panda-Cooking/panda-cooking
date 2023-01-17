import axios from "axios";

const api = axios.create({
    baseURL: "https://panda-cooking-brasil.herokuapp.com/",
    timeout: 5000,
});

export default api;
