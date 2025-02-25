import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
    { "name": "Jan", "sales": 400, "revenue": 2400 },
    { "name": "Feb", "sales": 300, "revenue": 1800 },
    { "name": "Mar", "sales": 500, "revenue": 3200 },
    { "name": "Apr", "sales": 450, "revenue": 2900 },
    { "name": "May", "sales": 600, "revenue": 3800 },
    { "name": "Jun", "sales": 700, "revenue": 4800 },
    { "name": "Jul", "sales": 800, "revenue": 5300 },
    { "name": "Aug", "sales": 750, "revenue": 5000 },
    { "name": "Sep", "sales": 680, "revenue": 4000 },
    { "name": "Oct", "sales": 720, "revenue": 4900 },
    { "name": "Nov", "sales": 690, "revenue": 4600 },
    { "name": "Dec", "sales": 1050, "revenue": 5600 }
];

const Chart = () => {
    return (
        <div className="w-full h-[200px] md:h-[250px] lg:h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
