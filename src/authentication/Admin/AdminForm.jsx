import React from "react"
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Context/AuthProvider";
import { useNavigate } from "react-router";
import Loader from "../../util/Loader/Loader";
import swal from 'sweetalert';

const AdminForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {login} = useAuth();
    const navigate = useNavigate();

    //handle form submit
    const onSubmit = (data) => {
        const {email, password} = data;
        console.log(`Email : ${email}, Password : ${password}`)
        login(email, password)
            .then(result => {
                console.log(result.user);
                swal({
                  title: "Login successful!",
                  text: "You're logged in! Redirecting to your dashboard...",
                  icon: "success",
                  dangerMode: false,
                })
                navigate("/dashboard");
            })
            .catch(error => {
                console.log(error.code, error.message)
            })
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
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
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
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                    />
                    {errors.password && <small className="text-red-500" role="alert">Password is required</small>}
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
