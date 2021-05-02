import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8888/api',
    headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
});