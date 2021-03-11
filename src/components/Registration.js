import React, {useState} from "react";
import authService from "../services/AuthService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/Auth.css";

const Registration = () => {

    const [formUser, setFormUser] = useState({
        userName: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        authService.register(formUser.userName, formUser.password)
            .then(response => {
                console.log(response);
            });
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return <form className={"registration-form user-form"} onSubmit={event => handleSubmit(event)}>
        <TextField id="registration-username-input" className={"registration-form-element registration-form-input"} name="userName" type="text"
                   label="Username" variant="filled" required={true} onChange={handleChange} value={formUser.userName}/>
        <TextField id="registration-password-input" className={"registration-form-element registration-form-input"} type="password" name="password"
                   onChange={handleChange} value={formUser.password} label="Outlined" variant="outlined"
                   InputLabelProps={{shrink: true}}/>
        <Button className={"registration-form-element user-form-element"} type="submit" value="Submit" variant="outlined"
                color="default"> Submit </Button>
    </form>
}
export default Registration;