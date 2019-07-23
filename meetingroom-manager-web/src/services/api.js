import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:51330/api/"
});

export default api;
