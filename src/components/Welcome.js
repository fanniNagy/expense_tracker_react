import React, {useContext} from "react";
import {users} from "../context/UserContext";
import Registration from "./Registration";
import Login from "./Login";
import Entry from "./Entry";

const Welcome = () => {

    const {authenticated} = useContext(users);
    return (
        <div className={"welcome-container"}>
            {authenticated ? (<div className={"entry-container"}><Entry/></div>)
                : (<div className={"login-registration-container"}>
                    <div className={"registration-container"}> SIGN IN <Registration/></div>
                    <div className={"login-container"}> LOG IN <Login/></div>
                </div>)
            }
        </div>
    )
}

export default Welcome