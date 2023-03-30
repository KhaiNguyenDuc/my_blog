import axios from "axios";

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default axios.create({
    baseURL: REACT_APP_API_ENDPOINT 
});

const myAxios = axios.create({
    baseURL: REACT_APP_API_ENDPOINT 
})


export  {myAxios}

