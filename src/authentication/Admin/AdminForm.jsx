import {Button, Form, Input } from "@heroui/react";
import React, { useState } from "react"

const AdminForm = () => {
    const [action, setAction] = useState(null);
  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 py-5"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        name="username"
        placeholder="Username"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid password"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button className="mx-auto w-full bg-green-300 uppercase rounded cursor-pointer text-sm font-bold text-gray-700" type="submit">
          LogIn
        </Button>      
    </Form>
  )
};

export default AdminForm;
