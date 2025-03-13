import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Image
} from "@heroui/react";
import { GiHamburgerMenu, GiToothbrush } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router";
import { BsBarChart } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { useAuth } from "../Context/AuthProvider";
import { FaUsers } from "react-icons/fa";



export default function SmallNav() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out successfully.");
                navigate("/");
            })
            .catch((error) => console.error("Error logging out:", error));
    };

    return (
        <>
            <Button onPress={onOpen} className="px-0 min-w-5 cursor-pointer">
                <GiHamburgerMenu />
            </Button>
            <Drawer backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1" onClick={() => onOpenChange(false)}>
                                <Link to='/dashboard'><Image
                                    alt="HeroUI hero Image"
                                    src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
                                    className="w-16 sm:hidden"
                                /></Link>
                                <h1 className="uppercase text-xs marcellus">Bamboo Brush</h1>
                            </DrawerHeader>
                            <DrawerBody>
                                <nav>
                                    <ul className="space-y-2 w-52">
                                        <li onClick={() => onOpenChange(false)} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/dashboard' ? 'bg-green-500 text-white' : ''}`}>
                                            <BsBarChart className="text-2xl" />
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </li>
                                        <li onClick={() => onOpenChange(false)} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/dashboard/products' ? 'bg-green-500 text-white' : ''}`}>
                                            <GiToothbrush className="text-2xl" />
                                            <Link to='/dashboard/products'>Products</Link>
                                        </li>
                                        <li onClick={() => onOpenChange(false)} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/dashboard/add-new' ? 'bg-green-500 text-white' : ''}`}>
                                            <IoAddCircleOutline />
                                            <Link to='/dashboard/add-new'>Add Product</Link>
                                        </li>
                                        <li onClick={() => onOpenChange(false)} className={`flex items-center gap-2 p-2 rounded ${location.pathname === '/dashboard/users' ? 'bg-green-500 text-white' : ''}`}>
                                            <FaUsers />
                                            <Link to='/dashboard/users'>Users</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div onClick={handleLogOut} className="flex items-center gap-2 bg-red-300 p-2 rounded w-30 text-sm"><MdLogout /><Link>Log Out</Link></div>
                            </DrawerBody>
                            
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
