import React, { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

import app from "../../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    //registration with new user
    const createUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    //Login with existing user
    const login = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Handler for search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const allValues = { user, createUser, login, searchQuery, onSearchChange: handleSearchChange, loading, setLoading }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);