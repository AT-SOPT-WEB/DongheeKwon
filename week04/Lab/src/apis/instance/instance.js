// src/instance/instance.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.atsopt-seminar4.site",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
