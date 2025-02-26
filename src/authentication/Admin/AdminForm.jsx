import React from "react"
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Context/AuthProvider";

const AdminForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {login, loading} = useAuth();

    //handle form submit
    const onSubmit = (data) => {
        const {email, password} = data;
        console.log(`Email : ${email}, Password : ${password}`)
        reset()
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-5">
                <div>
                    <input
                    {...register("name", {
                        required: "required",
                      })}
                        type="text"
                        placeholder="User Name"
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                    />
                    {errors.name && <small className="text-red-500" role="alert">User Name is required</small>}
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
