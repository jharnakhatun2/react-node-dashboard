import React from "react"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../components/Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { auth, createUser,setLoading } = useAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    //Handle form submit
    const onSubmit = (data) => {
        const { name, email, password } = data;
        console.log(`Name: ${name} Email : ${email}, Password : ${password}`)
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //update user profile name
                updateProfile(auth.currentUser, {
                    displayName: name,
                });
                const creationTime = result.user?.metadata?.creationTime;
                const usersInfo = { name, email, creationTime }

                //Save user data in mongodb database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                //show success message
                swal({
                    title: "Registration successful",
                    text: "Account created successfully!",
                    icon: "success",
                    dangerMode: false,
                })

                navigate('/')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode)
                console.error(errorMessage)
                if (errorCode === "auth/email-already-in-use") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email already in used. Please try again!",
                    });
                }
                setLoading(false)
            })
        reset()
    }

    //Handle Google signin
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error));
    }

    return (
        <div className="w-full sm:w-md bg-[#f8f0e4] p-9 rounded-2xl shadow-2xl m-5">
            <h1 className="uppercase text-2xl font-bold text-center text-gray-500">Bamboo Brush</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-5">
                <div>
                    <input
                        {...register("name", {
                            required: "required",
                        })}
                        type="text"
                        placeholder="Name"
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                    />
                    {errors.name && <small className="text-red-500" role="alert">Name is required</small>}
                </div>


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
                    {errors.email && <small className="text-red-500" role="alert">{errors.email.message}</small>}
                </div>


                <div>
                    <input
                        {...register("password", {
                            required: "required",
                            minLength: {
                                value: 9,
                                message: "Min length is 9",
                            },
                        })}
                        type="password"
                        placeholder="Password"
                        className="input-style bg-[#f3e5d3] border-[#faeedc]"
                    />
                    {errors.password && <small className="text-red-500" role="alert">{errors.password.message}</small>}
                </div>

                <div>
                    <input
                        type="submit"
                        value="Create Account"
                        className="bg-green-200 text-gray-700 font-medium md:max-w-full uppercase input-style cursor-pointer"
                    />
                </div>
            </form>
            <hr className="text-[#e6d4be] mb-5" />
            <button
                onClick={handleGoogleSingIn}
                className="w-full font-bold shadow-sm rounded-lg py-3 bg-gray-500 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline cursor-pointer">
                <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4" />
                        <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853" />
                        <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04" />
                        <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335" />
                    </svg>
                </div>
                <span className="ml-4">
                    Sign Up with Google
                </span>
            </button>
            <p className="text-center text-sm text-gray-500 pt-3">Already have an Account ? <Link to='/login' className="text-green-400 font-bold">Login</Link></p>
        </div>
    )
};

export default Register;
