import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.88.16:4200/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Connection": "keep-alive"
  },
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
