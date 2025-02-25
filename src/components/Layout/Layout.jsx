import React from "react"
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-100 flex w-full min-h-screen">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 px-8 pt-8">
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

export default Layout;
