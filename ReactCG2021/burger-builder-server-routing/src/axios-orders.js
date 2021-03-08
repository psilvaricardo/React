import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-http-server-default-rtdb.firebaseio.com/'
});

export default instance;
