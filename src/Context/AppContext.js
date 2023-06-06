import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [loggedUserName, setLoggedUserName] = useState('');

    return (
        <AppContext.Provider value={{ loggedUserName, setLoggedUserName }} >
            {children}
        </AppContext.Provider>
    );
}