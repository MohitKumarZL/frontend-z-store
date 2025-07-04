import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import mobilelogin from "../assets/mobilelogin.png";
import Footer from "./Footer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import apple from "../assets/apple.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });



  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };


  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        // Redirect or clear form
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
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
                Create Account
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full">
                <input type="text" placeholder="First Name" className="focus:outline-none focus:ring-0" value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full">
                <input type="text" placeholder="Last Name" className="focus:outline-none focus:ring-0" value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full">
                <input type="email" placeholder="Email" className="focus:outline-none focus:ring-0" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </li>
              <li className="border border-[#606060] px-4 py-3 w-full flex justify-between items-center ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full  outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-xl text-gray-600"
                >
                  {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </li>
              <li className="border border-[#606060]  bg-[#5A6D57] text-white text-sm p-[16px] w-full mt-2 flex justify-center">
                <button onClick={handleRegister}>Register Now</button>
              </li>
              <li>
                <span className="text-sm">Already Have An Account?</span>{" "}
                <Link to="/login" className="p-4 text-[#748C70]">
                  Log In
                </Link>{" "}
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
              <li className="text-xs text-center mt-2">
                <p className="leading-5">
                  By Clicking Register Now you Agree To&nbsp;
                  <a
                    href="https://www.youtube.com/"
                    className="text-[#748C70] underline underline-offset-1"
                  >
                    Terms & Conditions
                  </a>
                  &nbsp;And&nbsp;
                  <a
                    href="https://www.youtube.com/"
                    className="text-[#748C70] underline underline-offset-1"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
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

export default Signin;
