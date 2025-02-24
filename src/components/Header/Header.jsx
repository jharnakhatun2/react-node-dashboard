import React, { useContext } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { User } from "@heroui/user";



const Header = () => {
    const { searchQuery, onSearchChange } = useAuth(); 

    return (
        <header className="flex justify-between items-center mb-8 gap-5">
            <Image
                alt="HeroUI hero Image"
                src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
                className="w-16 sm:hidden"
            />
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
            </div>
        </header>
    );
};

export default Header;