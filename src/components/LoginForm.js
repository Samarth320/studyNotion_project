import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

    const [showPassword , setShowPassword] = useState(false);
    const navigate = useNavigate();

    const[FormData , setFormData] = useState(
        {
            email:"",
            password:""
        }
    )

    function changeHandler(event)
    {
        setFormData((prevData)=>{
           return {
                ...prevData,
                [event.target.name] : event.target.value,
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");

        console.log("printing the data after logged in")
        console.log(FormData);

        navigate("/dashboard");
    }


  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

        <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </p>

            <input
                required
                name='email'
                type='email'
                value={FormData.email}
                placeholder='Enter email id'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup>
            </p>

            <input
                required
                name='password'
                type= { showPassword ? ("text") : ("password") }
                value={FormData.password}
                placeholder='Enter Password'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={ ()=> setShowPassword((prev)=> !prev)}>
                { showPassword ?
                   (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  }
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm