import axios from "axios";
import { API_URL, authConfig } from "./utils/constant.js";

const registerUser = async () =>{
    const api_endpoint = `${API_URL}/register`;
    console.log(api_endpoint)
    const request = await axios.post(api_endpoint, authConfig);
    const res = await request.data;
    console.log(res);
}






registerUser().then((e)=>{
    console.log(e);
})