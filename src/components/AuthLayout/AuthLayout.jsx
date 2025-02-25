import React from "react"
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[url('https://i.ibb.co.com/bgsLnNcR/login.webp')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
            <Outlet/>
        </div>
    )
};

export default AuthLayout;
