import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import React from "react"
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
// import { Button, Card, Flex, Input, Spinner } from 'heroui';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Header */}
                <Header />
                {/* Children */}
                <Outlet />
                {/* Footer */}
                <Footer />

            </main>
        </div>
    )
};

export default Dashboard;
