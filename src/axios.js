import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/random',
});

export default instance;