import React from "react";
import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

const login = (username, password) => {
    let request = axios.post(`${baseUrl}login`, {
        "username": username,
        "password": password
    },{withCredentials: true});
    let response = request.then(response => response);
    return response;
}

export default {
    login
}

