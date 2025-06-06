import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import mobilelogin from "../assets/mobilelogin.png";
import Footer from "./Footer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import apple from "../assets/apple.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div className="mt-8 mb-6 sm:mb-12 mx-auto sm:mx-[7.5vw] grid grid-cols-1 sm:grid-cols-2 ">
      <div className="w-full flex justify-center items-center">
    <img src={login} className="hidden sm:block" />
    <img src={mobilelogin} className="block sm:hidden w-[80%]" />
      </div>
        <div className=" flex justify-center items-center mx-[8.889vw] mt-6 sm:mt-0">
          <div className="w-full">
            <ul className="flex flex-col justify-center items-center gap-2 ">
              <li className="flex justify-center text-3xl font-semibold mb-5">
                Log In
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full">
                <input type="email" placeholder="Email" className="focus:outline-none focus:ring-0"></input>
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full flex justify-between items-center ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full  outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-xl text-gray-600"
                >
                  {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </li>
              <li className="">
                <Link to="/signin" className="p-4 text-[#748C70] flex items-start">
                Forgot Your Password?
                </Link>{" "}
              </li>
              <li className="border border-[#606060]  bg-[#5A6D57] text-white text-sm p-[16px] w-full mt-2 flex justify-center">
                <button>Log In</button>
              </li>
              <li className="text-xs ">Or</li>
              <li className="flex justify-center gap-4 my-3">
                {" "}
                <button className="w-[35px] h-[35px] bg-black flex justify-center items-center rounded-full">
                  <img src={apple} className="bg-black w-[16px] h-[20px] " />
                </button>
                <button>
                  <img src={google} />
                </button>
                <button>
                  <img src={facebook} />
                </button>
              </li>
              <li>
                <span className="text-sm">New to Z-Store?</span>{" "}
                <Link to="/signin" className="p-4 text-[#748C70]">
                  Create An Account
                </Link>{" "}
              </li>

            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
