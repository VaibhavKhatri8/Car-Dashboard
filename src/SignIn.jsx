import React from "react";
import google from "./assets/google.svg";
import fb from "./assets/Filled.svg";
import eye from "./assets/icon.svg";
import { useNavigate } from "react-router";

function SignIn({ onSignIn }) {
  let navigate = useNavigate();

  // const handleSignIn = () => {
  //   navigate("/app/settings");
  // };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[560px] w-full  py-44">
        <div className=" bg-white p-6 w-full">
          <div>
            <h1 className="text-[#242731] font-bold text-3xl">Get's started</h1>
            <p className="font-inter font-medium text-lg text-[#353945] pt-4">
              Don't have an account?{" "}
              <span className="text-[#A162F7]">Sign up</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className="flex gap-3 pt-4 flex-col md:flex-row">
              <button className="flex py-4 px-8 justify-between gap-3 border border-[#E6E8EC] rounded-lg">
                <img src={google} alt="Google" /> Sign in with Google
              </button>
              <button className="flex py-4 px-8 bg-[#4776D0] rounded-lg text-white gap-3">
                <img src={fb} alt="Facebook" /> Sign in with Facebook
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-5 pb-5">
            <div className="w-full h-[1px] bg-[#E6E8EC]"></div>
            <div>or</div>
            <div className="w-full h-[1px] bg-[#E6E8EC]"></div>
          </div>
          <div className="flex flex-col border rounded-lg border-[#F4F5F6] py-5 pr-10 pl-5 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-base text-[#242731] font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                autoComplete="email"
                placeholder="uistore@gmail.com"
                className="py-5 pl-5 border border-[#B1B5C3] rounded-[10px]  placeholder:text-[#777E90]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-base text-[#242731] font-medium"
              >
                Password
              </label>
              <label className="relative">
                <img
                  src={eye}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3"
                />
                <input
                  placeholder="Zuichi, Switzerland"
                  className=" w-full py-5 pl-5 border border-[#B1B5C3] rounded-[10px]  placeholder:text-[#777E90]"
                ></input>
              </label>
            </div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4 border border-[#B1B5C3] rounded"
              />
              <label htmlFor="rememberMe" className="text-[#B1B5C3]">
                Remember me
              </label>
            </div>
            <div className="text-[#A162F7] pl-1">Forgot your password?</div>
          </div>
          <div>
            <button
              onClick={() => {
                onSignIn();
                navigate("/app/settings");
              }}
              className="w-full mt-7 font-inter font-bold text-xl py-4 rounded-xl text-white bg-[#A162F7]"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
