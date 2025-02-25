import React from "react"
import { Card } from "@heroui/card";
import AdminForm from "./AdminForm";

const Admin = () => {
    return (
        <Card className="w-[400px] bg-[#f8f0e4] py-6 px-10 shadow-2xl rounded-2xl">
            <h1 className="uppercase text-2xl font-bold text-center text-gray-500">Admin Login</h1>
            <AdminForm />
        </Card>
    )
};

export default Admin;
