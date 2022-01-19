import axios from "axios"

const API = axios.create({
    baseURL: "https://data.jsdelivr.com/v1",
})

export default API