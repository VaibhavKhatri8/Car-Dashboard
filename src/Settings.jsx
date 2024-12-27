import React from "react";
import one from "./assets/one.svg";
import ava from "./assets/avatar.svg";

const Settings = () => {
  return (
    <div className="p-4 sm:ml-64 bg-[#F5F5F5]">
      <div className="p-8 mt-16 h-full bg-white">
        <div className="w-full flex flex-col ">
          <h1 className="font-bold text-3xl text-[#242731]">Settings</h1>
          <div className="flex gap-4 pt-7 flex-wrap">
            <div className="font-medium text-lg text-[#5F6165] py-[6px] px-[14px] hover:bg-[#F6EFFE] active:bg-[#F6EFFE] ">
              My details
            </div>
            <div className="font-medium text-lg text-[#5F6165] py-[6px] px-[14px] hover:bg-[#F6EFFE] active:bg-[#F6EFFE] ">
              Profile
            </div>
            <div className="font-medium text-lg text-[#5F6165] py-[6px] px-[14px] hover:bg-[#F6EFFE] active:bg-[#F6EFFE]">
              Password
            </div>
            <div className="font-medium text-lg text-[#5F6165] py-[6px] px-[14px] hover:bg-[#F6EFFE] active:bg-[#F6EFFE]">
              Email
            </div>
            <div className="font-medium text-lg text-[#5F6165] py-[6px] px-[14px] hover:bg-[#F6EFFE] active:bg-[#F6EFFE]">
              Notification
            </div>
          </div>
          <div className="flex flex-col gap-7 pb-7 mt-12 border-b border-[#E9EAEC]">
            <div className=" space-y-1 pb-6 border-b border-[#E9EAEC]">
              <h1 className="font-bold text-xl text-[#242731]">Profile</h1>
              <p className="text-base text-[#5F6165]">
                Update your photo and personal details here.
              </p>
            </div>
            <div className="space-y-7">
              <div className="w-full flex gap-9 flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-2.5 w-full">
                  <p className=" font-medium text-sm text-[#7C7C8D]">Live in</p>
                  <label className="relative">
                    <img
                      src={one}
                      className="absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      placeholder="Zuichi, Switzerland"
                      className=" w-full py-4 pl-10 border border-[#E9EAEC] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#5F6165]"
                    ></input>
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2.5">
                  <p className=" font-medium text-sm text-[#7C7C8D]">
                    Street Address
                  </p>
                  <label className="relative">
                    <img
                      src={one}
                      className="absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      placeholder="2445 Crosswind Drive"
                      className=" w-full py-4 pl-10 border border-[#E9EAEC] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#5F6165]"
                    ></input>
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-2.5 w-full">
                  <p className=" font-medium text-sm text-[#7C7C8D]">Live in</p>
                  <label className="relative">
                    <img
                      src={one}
                      className="absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      placeholder="Zuichi, Switzerland"
                      className=" w-full py-4 pl-10 border border-[#E9EAEC] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#5F6165]"
                    ></input>
                  </label>
                </div>
              </div>
              <div className="w-full flex gap-9 flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-2.5 w-full">
                  <p className=" font-medium text-sm text-[#7C7C8D]">Live in</p>
                  <label className="relative">
                    <img
                      src={one}
                      className="absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      placeholder="Zuichi, Switzerland"
                      className=" w-full py-4 pl-10 border border-[#E9EAEC] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#5F6165]"
                    ></input>
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2.5">
                  <p className=" font-medium text-sm text-[#7C7C8D]">
                    Street Address
                  </p>
                  <label className="relative">
                    <img
                      src={one}
                      className="absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      placeholder="2445 Crosswind Drive"
                      className=" w-full py-4 pl-10 border border-[#E9EAEC] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#5F6165]"
                    ></input>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-6  mt-6 border-b border-[#E9EAEC]">
            <div className="flex items-center gap-5 lg:gap-40 flex-wrap">
              <div className="flex  min-[425px]:gap-16 sm:gap-6 md:gap-12 justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-base text-[#242731]">
                    Your Photo
                  </h4>
                  <p className="text-sm text-[#7C7C8D]">
                    This will be displayed on your profile.
                  </p>
                </div>
                <div>
                  <img src={ava} />
                </div>
              </div>
              <div className="flex gap-5">
                <p className="font-medium text-sm text-[#7C7C8D] hover:text-[#A162F7]">
                  Delete
                </p>
                <p className="font-medium text-sm text-[#7C7C8D] hover:text-[#A162F7]">
                  Update
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 flex max-w-2xl flex-col md:flex-row">
            <div className="flex flex-grow flex-shrink w-1/2 font-medium text-base text-[#242731]">
              Social Profiles
            </div>
            <div className="flex flex-grow flex-shrink w-1/2 flex-col gap-4">
              <button className="flex justify-start p-3.5 border border-[#E7ECF3] rounded-xl font-base text-[#7C7C8D]">
                facebook.com/
              </button>
              <button className="flex justify-start p-3.5 border border-[#E7ECF3] rounded-xl font-base text-[#7C7C8D]">
                twitter.com/
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
