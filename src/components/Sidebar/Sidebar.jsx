import { Image } from "@heroui/image";
import { Divider } from "@heroui/react";
import React from "react"
import { Link } from "react-router";



const Sidebar = () => {


  return (
    <aside className="w-64 bg-white shadow-lg p-6 hidden sm:flex flex-col items-center justify-between">
      <Image alt="HeroUI hero Image"
        src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
        className="w-24 lg:w-32" />

      <nav>
        <ul className="space-y-3">
          <li><Link to='/dashboard/products'>Products</Link></li>
          <li><Link to='/dashboard/add-new'>Add New Product</Link></li>
          <li><Link to='/dashboard/edit'>Edit Product</Link></li>
        </ul>
      </nav>

      <Link>Log Out</Link>
    </aside>
  )
};

export default Sidebar;
