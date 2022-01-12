import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    timeout: 20000
})

export default instance
