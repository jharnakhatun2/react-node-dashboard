import React from "react"
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";


const Dashboard = () => {
    return (
        <div className="bg-gray-100 flex w-full h-screen">
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
