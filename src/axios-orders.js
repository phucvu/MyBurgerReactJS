import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-b61ff.firebaseio.com/'
});

export default instance;