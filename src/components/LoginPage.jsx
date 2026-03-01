import { BODY_BG_IMG } from "../utils/constants";
import { useState } from "react";


const LoginPage = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
      <div className="relative">
        <img className="w-full h-screen " src={BODY_BG_IMG} alt="body background" />
        <div className="w-full h-screen absolute top-0 left-0 bg-black/70 flex justify-center items-center">
          <div className=" bg-black/70 h-1-/12 w-2/8 p-10 rounded-xl">
            <form action="" className="h-full w-full">
              <h1 className="text-white text-2xl font-bold">
             {isSignIn ? "Log In" : "Sign Up"}</h1>
              <div className="flex flex-col gap-4 py-5 mb-5">
                {!isSignIn && <input type="text" placeholder="Enter Your Full Name" className="bg-gray-700/70 rounded-lg p-3 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-md"/>}
                <input type="text" placeholder="Enter Your Email or phone number" className="bg-gray-700/70 rounded-lg p-3 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-md"/>
              <input type="password" placeholder="Enter Your Password" className="bg-gray-700/70 rounded-lg p-3 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white focus:text-white placeholder:text-sm text-sm"/>
              </div>
              <button className="bg-red-600 text-white font-lg text-xl py-2 px-5 w-full  rounded-lg flex items-center justify-center gap-1 hover:bg-red-700 transition-all duration-300 cursor-pointer" >{isSignIn ? "Log In" : "Sign Up"}</button>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1 py-2">
              <input type="checkbox" />
              <label className="text-white">Remember me</label>
              </div>
              <p className="text-white">Need help?</p>
              </div>
              <div className="text-sm flex gap-2 py-2">
                <span className="text-gray-500">{isSignIn ? "New to Netflix?" : "You already have an account."}</span>
                <button className="text-white font-semibold hover:text-red-600 transition-all duration-100 cursor-pointer" onClick={(handleSignIn)}>{isSignIn ? "Sign up now" : "Log In"}</button>
              </div>
              <div className="pt-2">
                <span className="text-sm text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                <span className="text-blue-500 text-sm ml-2 hover:text-blue-600 transition-all duration-200 cursor-pointer">Learn more.</span>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

