import {Button, Form, Input } from "@heroui/react";
import React, { useState } from "react"

const LoginForm = () => {
    const [action, setAction] = useState(null);
  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
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
      
      <div className="flex gap-2">
        <Button className="bg-green-300 uppercase rounded cursor-pointer text-sm font-bold text-gray-700" type="submit">
          LogIn
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  )
};

export default LoginForm;
