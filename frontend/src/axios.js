import axios from 'axios';

const instans = axios.create({
    baseURL: 'http://localhost:4444'
});

export  default instans;