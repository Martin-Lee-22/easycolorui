import axios from "axios";

const BASE_URL = 'https://easycolorui-server.onrender.com/'

export default axios.create({
    baseURL: BASE_URL
})