import axios from 'axios';

const baseUrl = 'http://localhost:8080';
axios.defaults.baseURL = baseUrl;

const login = (username, password) => {
    let request = axios.post(`/login`, {
        "username": username,
        "password": password
    },{withCredentials: true});
    return request.then(response => response);
}

const register = (username, password) => {
    let request = axios.post(`/user/register`, {
        "userName": username,
        "password": password
    }, {withCredentials: true});
    return request.then(response => response);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    register
}

