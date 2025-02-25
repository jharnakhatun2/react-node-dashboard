import {Button, Form, Input } from "@heroui/react";
import React, { useState } from "react"

const AdminForm = () => {
    const [action, setAction] = useState(null);
  return (
    <form className="space-y-5 my-5">
                <div>
                    <input
                        type="text"
                        placeholder="User Name"
                        name="name"
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                        required
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Log In"
                        className="bg-green-200 text-gray-700 font-medium md:max-w-full uppercase input-style cursor-pointer"
                    />
                </div>
            </form>
  )
};

export default AdminForm;
