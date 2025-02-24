import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    // Handler for search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <AuthContext.Provider value={{ searchQuery, onSearchChange: handleSearchChange }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);