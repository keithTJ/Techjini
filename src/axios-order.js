import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-project-288311.firebaseio.com/'
});

export default instance;