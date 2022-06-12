import axios from "axios";

const axiosInstant = axios.create({
  baseURL: process.env.API,
  withCredentials: true,
});

export default axiosInstant;
