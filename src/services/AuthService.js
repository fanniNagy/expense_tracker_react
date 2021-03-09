import React from "react";
import axios from 'axios';

const baseUrl = 'http://localhost:8080';
axios.defaults.baseURL = baseUrl;

const login = (username, password) => {
    let request = axios.post(`/login`, {
        "username": username,
        "password": password
    },{withCredentials: true});
    let response = request.then(response => response);
    return response;
}

export default {
    login
}

