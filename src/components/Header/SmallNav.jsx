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
import { Link, useNavigate } from "react-router";
import { BsBarChart } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { useAuth } from "../Context/AuthProvider";



export default function SmallNav() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        <>
            <Button onPress={onOpen} className="px-0 min-w-5">
                <GiHamburgerMenu />
            </Button>
            <Drawer backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                <Link to='/dashboard'><Image
                                    alt="HeroUI hero Image"
                                    src="https://i.ibb.co.com/wNSNYFtg/logo123.webp"
                                    className="w-16 sm:hidden"
                                /></Link>
                                <h1 className="uppercase text-xs">Bamboo Brush</h1>
                            </DrawerHeader>
                            <DrawerBody>
                            <nav>
                                <ul className="space-y-4">
                                            <li className="flex items-center gap-2"><BsBarChart className="text-2xl" /><Link to='/dashboard'> Dashboard</Link></li>
                                            <li className="flex items-center gap-2"><GiToothbrush className="text-2xl" /><Link to='/dashboard/products'> Products</Link></li>
                                            <li className="flex items-center gap-2"><IoAddCircleOutline /><Link to='/dashboard/add-new'>Add Product</Link></li>
                                </ul>
                                    </nav>
                                    <div onClick={handleLogOut} className="flex items-center gap-2 bg-red-300 p-2 rounded mt-10 w-30"><MdLogout /><Link>Log Out</Link></div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
