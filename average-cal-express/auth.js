import axios from "axios";
import { API_URL, AUTH_TOKEN_CONFIG, authConfig } from "./utils/constant.js";

const registerUser = async () => {
  const api_endpoint = `${API_URL}/register`;
  const request = await axios.post(api_endpoint, authConfig);
  const res = await request.data;
  console.log(res);
};

const getAuthToken = async () => {
  try {
    const api_endpoint = `${API_URL}/auth`;
    const res = await axios.post(api_endpoint, AUTH_TOKEN_CONFIG);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

getAuthToken();
