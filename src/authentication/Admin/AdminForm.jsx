import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Context/AuthProvider";
import { useNavigate } from "react-router";
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const AdminForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { login, setLoading } = useAuth();
  const navigate = useNavigate();

  //handle form submit
  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(`Email : ${email}, Password : ${password}`)
    try {
      const res = await login(email, password)
      console.log(res.user);
      swal({
        title: "Login successful!",
        text: "You're logged in! Redirecting to your dashboard...",
        icon: "success",
        dangerMode: false,
      });
      navigate("/dashboard");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode)
      console.error(errorMessage)

      if (errorCode === "auth/invalid-credential") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Credentials. Please try again!",
        });
      }

    } finally {
      setLoading(false)
    }
    reset()
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-5">
      <div>
        <input
          {...register("email", {
            required: "required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Not match email format",
            },
          })}
          type="email"
          placeholder="Email"
          className="input-style bg-[#f3dcc0] border-[#faeedc] shadow"
        />
        {errors.email && <small className="text-red-500" role="alert">Email is required</small>}
      </div>
      
      <div>
        <input
          {...register("password", {
            required: "required",
          })}
          type="password"
          placeholder="Password"
          className="input-style bg-[#f3dcc0] border-[#faeedc] shadow"
        />
        {errors.password && <small className="text-red-500" role="alert">Password is required</small>}
      </div>


      <div>
        <input
          type="submit"
          value="LogIn"
          className="bg-green-300 text-gray-700 font-bold md:max-w-full uppercase input-style cursor-pointer"
        />
      </div>
    </form>
  )
};

export default AdminForm;
