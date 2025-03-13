import React from "react"
import { Card } from "@heroui/card";
import AdminForm from "./AdminForm";

const Admin = () => {
    return (
        <Card className="w-[300px] sm:w-[400px] bg-[#f5e7d1] py-6 px-10 shadow-2xl rounded-2xl">
            <h1 className="uppercase text-2xl font-bold text-center text-gray-700 mb-3">Admin Login</h1>
            <p className="px-2 py-1  text-gray-600 text-sm">Email : <span className="font-bold text-gray-600 pr-3">admin@gmail.com</span> Pass : <span className="font-bold text-gray-600">admin123</span></p>
            <AdminForm />
        </Card>
    )
};

export default Admin;
