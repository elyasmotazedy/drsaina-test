import axios from "axios";
const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
