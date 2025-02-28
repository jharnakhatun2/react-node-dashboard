import React, { useContext } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { User } from "@heroui/user";
import { Link } from "react-router";
import SmallNav from "./SmallNav";



const Header = () => {
    const { searchQuery, onSearchChange } = useAuth(); 

    return (
        <header className="flex justify-between items-center mb-8 gap-5">
            <h2 className="uppercase text-xl text-gray-500 hidden sm:block font-semibold">Welcome...</h2>
            <Link to='/dashboard'><Image
                alt="HeroUI hero Image"
                src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
                className="w-16 sm:hidden"
            /></Link>
            
            <div className="flex gap-2">
                <Input
                    placeholder="Search..."
                    className="sm:w-46 lg:w-64"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <User
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                />
                <div className="sm:hidden">
                <SmallNav />
                </div>
            </div>
            
        </header>
    );
};

export default Header;