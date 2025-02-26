import React, { useEffect } from "react"
import { useNavigate } from "react-router";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate('/');
            }
        });
        return ()=> unsubscribe();
    },[navigate])
  return children;
};

export default PrivateRoute;
