import React from "react"
import { Link } from "react-router";
import LoginForm from "./LoginForm";
import { Card } from "@heroui/card";

const Login = () => {
    return (
        <div className="min-h-screen bg-[url('https://i.ibb.co.com/bgsLnNcR/login.webp')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
            <Card className="w-[400px] bg-[#f8f0e4] py-6 px-10 shadow-2xl rounded-2xl">
                <h1 className="uppercase text-2xl font-bold text-center">Log In</h1>
                <LoginForm />
            </Card>
        </div>
    )
};

export default Login;
