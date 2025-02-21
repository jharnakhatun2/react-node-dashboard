import React from "react"
import { Link } from "react-router";



const Sidebar = () => {
    
  
  return (
    <aside className="w-64 bg-white shadow-lg p-6 h-screen">
        <nav>
          <ul>

          
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/add-new'>Add New Product</Link></li>
          <li><Link to='/edit'>Edit Product</Link></li>
          </ul>
        </nav>
      </aside>
  )
};

export default Sidebar;
