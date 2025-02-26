import { Image } from "@heroui/image";
import React from "react"
import { Link, useNavigate } from "react-router";
import { GiToothbrush } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { useAuth } from "../Context/AuthProvider";
import { signOut } from "firebase/auth";


const Sidebar = () => {
  const {auth} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully.");
        navigate("/"); 
      })
      .catch((error) => console.error("Error logging out:", error));
  };


  return (
    <aside className="text-marcellus w-64 bg-white shadow-lg p-6 hidden sm:flex flex-col items-center">
      <Link to='/dashboard'><Image alt="HeroUI hero Image"
        src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
        className="w-24 lg:w-32 " /></Link>

      <nav>
        <ul className="space-y-4 py-32">
          <li className="flex items-center gap-2"><BsBarChart className="text-2xl"/><Link to='/dashboard'> Dashboard</Link></li>
          <li className="flex items-center gap-2"><GiToothbrush className="text-2xl"/><Link to='/dashboard/products'> Products</Link></li>
          <li className="flex items-center gap-2"><IoAddCircleOutline /><Link to='/dashboard/add-new'>Add Product</Link></li>
        </ul>
      </nav>

<div onClick={handleLogOut} className="flex items-center gap-2 bg-red-300 p-2 rounded mt-10"><MdLogout /><Link>Log Out</Link></div>
    </aside>
  )
};

export default Sidebar;
