import React, {useContext} from "react";
import {users} from "../context/UserContext";
import Registration from "./Registration";
import Login from "./Login";
import Entry from "./Entry";

const Welcome = () => {

    const registrationText = "Sign in";
    const loginText = "Log in"

    const {authenticated} = useContext(users);
    return (
        <div className={"welcome-container"}>
            {authenticated ? (<div className={"entry-container"}><Entry/></div>)
                : (<div className={"login-registration-container shadowed-box"}>
                    <div className={"registration-container"}>
                        <p>{registrationText.toUpperCase()}</p>
                        <Registration/>
                    </div>
                    <div className={"login-container"}>
                        <p>{loginText.toUpperCase()}</p>
                        <Login/>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Welcome