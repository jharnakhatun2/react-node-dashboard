import React from "react"
import { Link } from "react-router";
import LoginForm from "./LoginForm";
import { Card } from "@heroui/card";

const Login = () => {
    return (
        <div className="min-h-screen bg-[url('https://i.ibb.co/bgsLnNcR/login.webp')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
            <Card className="w-[400px] bg-white py-6 px-10 shadow-xl rounded-2xl">
                <h1 className="uppercase text-2xl font-bold">Log In</h1>
                <p className="py-2 bg-green-50 px-2 my-3"><span className="text-gray-500">User</span> : admin <span className="text-gray-500 pl-5">Password</span> : 12345</p>
                <LoginForm />
            </Card>
        </div>
    )
};

export default Login;
