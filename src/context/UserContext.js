import React, {createContext, useState} from 'react';

export const users = createContext(null);

export function UserProvider (props){
    const[authenticated, setAuthenticated] = useState(false);
    const[user, setUser] = useState({username:""});
    return(
        <users.Provider value={{authenticated, setAuthenticated, user, setUser}}>
            {props.children}
        </users.Provider>
    );
}
