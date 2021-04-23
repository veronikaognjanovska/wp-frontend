import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        //'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'accept':'*/*',
        //
        // // 'Access-Control-Allow-Origin':'http://localhost:3000',
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Methods': '*',
    }
});

export default instance;
