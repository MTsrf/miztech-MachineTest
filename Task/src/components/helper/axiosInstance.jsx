import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://18.208.183.190/api/tasks/",
    headers: {
        "Content-type": "application/json"
    }
})

export default axiosInstance