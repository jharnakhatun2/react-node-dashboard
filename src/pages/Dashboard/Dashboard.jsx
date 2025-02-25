import React from "react"
import Chart from "./Chart";
import DashboardLink from "../../util/DashboardLink/DashboardLink";

const Dashboard = () => {
    return (
     <>
      
        
     
        <DashboardLink/>
         
      
        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-xl lg:text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total Revenue</h3>
            <p className="text-xl lg:text-3xl font-bold">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Active Projects</h3>
            <p className="text-xl lg:text-3xl font-bold">45</p>
          </div>
        </div>

        {/* Chart */}
        <div className="py-10">
        <h2 className="uppercase pb-5">Sales Revenue :</h2>
        <Chart/>
        </div>
      </>
    )
};

export default Dashboard;
