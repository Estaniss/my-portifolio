import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5";

const request = axios.create({
  baseURL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default request;
