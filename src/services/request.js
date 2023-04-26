import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";
const request = axios.create({
    baseURL : BASE_URL,
    timeout: TIMEOUT,
})

export  default request