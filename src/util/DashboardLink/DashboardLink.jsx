import React from "react"
import { FaGlobe } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router";

const DashboardLink = () => {
  return (
    <div className="flex items-center gap-3 text-green-600">
      <FaGlobe />
      <p><Link to="/dashboard">Dashboard</Link> </p>
      <IoMdArrowDropright />
    </div>
  )
};

export default DashboardLink;
