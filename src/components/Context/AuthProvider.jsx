import React, { createContext, useContext, useState } from "react";
import {getAuth} from "firebase/auth";

import app from "../../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    //create new user
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // Handler for search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const allValues = { createUser,searchQuery, onSearchChange: handleSearchChange, loading, setLoading }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);