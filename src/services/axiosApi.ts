import axios from "axios";

export const API_BASE_URL = "https://bmplants.loca.lt";

const axiosApi = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosApi;
