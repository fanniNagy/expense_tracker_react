import React, {useContext, useState} from "react";
import authService from "../services/AuthService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {users} from "../context/UserContext";
import axios from "axios";
import "../css/Auth.css"

const Login = () => {
    // const baseUrl = 'http://localhost:8080';
    // axios.defaults.baseURL = baseUrl;

    const {setUser, setAuthenticated} = useContext(users);

    const [formUser, setFormUser] = useState({
        userName: "",
        password: ""
    })

    function fillContext(username) {
        axios
            .get(`/user/${username}`, {withCredentials: true})
            .then(() => {
                setUser({
                    username: username
                })
                setAuthenticated(true);
            })
            .catch(error => console.log(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        authService.login(formUser.userName, formUser.password)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    fillContext(formUser.userName);
                }
            })
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormUser(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formUser);
    };

    return <form className={"login-form user-form"} onSubmit={event => handleSubmit(event)}>
        <TextField id="username-input" className={"login-form-element login-form-input"} name="userName" type="text"
                   label="Username" variant="filled" required={true} onChange={handleChange} value={formUser.userName}/>
        <TextField id="password-input" className={"login-form-element login-form-input"} type="password" name="password"
                   onChange={handleChange} value={formUser.password} label="Outlined" variant="outlined"
                   InputLabelProps={{shrink: true}}/>
        <Button className={"login-form-element user-form-element"} type="submit" value="Submit" variant="outlined"
                color="default"> Submit </Button>
    </form>
}
export default Login;