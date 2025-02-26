import React, { createContext, useContext, useState } from "react";
import {getAuth} from "firebase/auth";

import app from "../../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    // Handler for search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <AuthContext.Provider value={{ searchQuery, onSearchChange: handleSearchChange, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);