import { Input } from "@heroui/input";
import { User } from "@heroui/user";
import React from "react"




const Header = () => {


    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
            <div className="flex gap-6 items-center">
            <Input placeholder="Search..." className="w-64" />
            <User
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                description="Product Designer"
                name="Jane Doe"
            />
            </div>
        </header>
    )
};

export default Header;
