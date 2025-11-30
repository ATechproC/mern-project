import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [token, setToken] = useState("");

    return <AppContext.Provider value={{backendURL, token, setToken}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;

export const useApp = () => useContext(AppContext);