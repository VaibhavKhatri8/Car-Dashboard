import React from "react";
import search from "./assets/search.svg";
import edit from "./assets/edit.svg";
import avatar from "./assets/avatar.svg";
import pin from "./assets/pin.svg";
import two from "./assets/two.svg";
import video from "./assets/video.svg";
import pause from "./assets/pause.svg";
import wave from "./assets/wave.svg";
import clip from "./assets/clip.svg";
import send from "./assets/send.svg";
import back from "./assets/back.svg";
import { useState } from "react";

const Messages = () => {
  const [toggleMessage, setToggleMessage] = useState(true);

  return (
    <div className="flex justify-center  p-4 sm:ml-64 bg-[#F5F5F5] max-h-screen overflow-hidden">
      <div className=" p-4 sm:p-8 w-full bg-white mt-16 ">
        <div className="h-full min-[896px]:flex max-[896px]:flex lg:gap-8 ">
          <div
            className={`h-full w-full lg:max-w-[272px] lg:flex flex-col gap-10 ${
              toggleMessage ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-7 pr-3">
              <div className="flex w-full justify-between">
                <h1 className="font-inter font-bold text-3xl text-[#292C31]">
                  Messages
                </h1>
                <img src={edit} />
              </div>
              <label className="relative">
                <img
                  src={search}
                  className="absolute top-1/2 transform -translate-y-1/2 left-3"
                />
                <input
                  placeholder="Search..."
                  className=" w-full py-4 pl-10 bg-[#F5F5F5] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#7C7C8D]"
                ></input>
              </label>
            </div>
            <div className=" flex flex-col gap-10 overflow-y-auto h-full ">
              <div className=" flex flex-col w-full">
                <div className="flex gap-2">
                  <img src={pin} />
                  <h4 className="font-inter font-medium text-xs text-[#A9ABAD]">
                    PINNED
                  </h4>
                </div>
                <div className=" flex flex-col gap-6 mt-4">
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col w-full ">
                <div className="flex gap-2">
                  <img src={pin} />
                  <h4 className="font-inter font-medium text-xs text-[#A9ABAD]">
                    PINNED
                  </h4>
                </div>
                <div className=" flex flex-col gap-6 mt-4">
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setToggleMessage(false);
                    }}
                    className="flex justify-between items-center w-full md:min-w-[272px]"
                  >
                    <div className="flex items-center gap-3.5 w-full">
                      <img src={avatar} />
                      <div className="w-full">
                        <h1 className=" font-bold text-base text-[#1A1D1F]">
                          Killan James
                        </h1>
                        <h2 className=" text-sm text-[#258C60]">Typing...</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" font-medium text-sm text-[#A9ABAD]">
                        4:30PM
                      </p>
                      <img src={two} className=" h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${
              toggleMessage ? "hidden" : "flex"
            } lg:flex flex-col w-full justify-between`}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col md:px-6 h-full">
                <div className=" w-full py-4 ">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3.5 items-center">
                      <img
                        src={back}
                        className="w-8 h-8"
                        onClick={() => setToggleMessage(true)}
                      />
                      <img src={avatar} className="w-12 h-12" />
                      <div className="flex flex-col">
                        <h1 className="text-sm text-[#363D48]">Killan James</h1>
                        <h2 className=" font-popins text-xs text-[#818891]">
                          Active Now
                        </h2>
                      </div>
                    </div>
                    <div className=" lg:flex hidden gap-2.5 ">
                      <div className=" w-full p-3 bg-[#F2F6F8] rounded-[30px]">
                        <img src={video} />
                      </div>
                      <div className=" w-full p-3 bg-[#F2F6F8] rounded-[30px]">
                        <img src={video} />
                      </div>
                      <div className=" w-full p-3 bg-[#F2F6F8] rounded-[30px]">
                        <img src={video} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col py-6 gap-8   overflow-y-auto w-auto">
                  <div className=" lg:mr-20 xl:mr-32">
                    <div className="w-full flex flex-col  items-end gap-2">
                      <div className="flex gap-3.5">
                        <img src={avatar} className="w-11 h-11" />
                        <div className="py-2.5 pr-5 pl-3.5 bg-[#F5F6FA] rounded-b-xl rounded-tr-xl text-sm text-[#363D48] font-normal">
                          Hi, I hope you are doing well, yesterday you have gave
                          a pen This very nice, i am very happy for
                          this.yesterday you have gave a pen This very nice
                        </div>
                      </div>
                      <div className=" font-medium text-sm text-[#A9ABAD]">
                        4:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3.5  lg:ml-20 xl:ml-32">
                    <div className="py-2.5 pr-7 pl-3.5 bg-[#A162F7] rounded-b-xl rounded-tl-xl text-sm text-white font-normal">
                      yea I'm well, Thank you, i am very happy for
                      this.yesterday you have gave a pen This very nice
                    </div>
                    <img src={avatar} className="h-11 w-11" />
                  </div>
                  <div className="flex flex-col gap-3  lg:mr-20 xl:mr-32">
                    <div className="flex gap-3.5">
                      <img src={avatar} className="w-11 h-11" />
                      <div className="py-2.5 pr-5 pl-3.5 bg-[#F5F6FA] rounded-b-xl rounded-tr-xl text-sm text-[#363D48] font-normal">
                        Hi, I hope you are doing well, yesterday you have gave a
                        pen This very nice 😍
                      </div>
                    </div>
                    <div className="py-2.5 pr-5 pl-3.5 bg-[#F5F6FA] rounded-b-xl rounded-tr-xl text-sm text-[#363D48] font-normal mr-14">
                      i am very happy for this.yesterday you have gave a pen
                      This very nice
                    </div>
                    <div className=" font-medium text-sm text-[#A9ABAD]">
                      4:30 PM
                    </div>
                  </div>
                  <div className="flex gap-3.5  lg:ml-20 xl:ml-32">
                    <div className="py-2.5 pr-7 pl-3.5 bg-[#A162F7] rounded-b-xl rounded-tl-xl text-sm text-white font-normal">
                      yea I'm well, Thank you, i am very happy for
                      this.yesterday you have gave a pen This very nice
                    </div>
                    <img src={avatar} className="h-11 w-11" />
                  </div>
                  <div className="flex gap-3.5">
                    <img src={avatar} className="w-11 h-11" />
                    <div className=" flex justify-between p-2.5 bg-[#F5F6FA] rounded-b-xl rounded-tr-xl text-sm text-[#363D48] font-normal items-center gap-2.5">
                      <img src={pause} />
                      <img src={wave} />
                      <div>1:25</div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full pt-5">
                  <label className="relative w-full">
                    <img
                      src={clip}
                      className="absolute top-1/2 transform -translate-y-1/2 left-6"
                    />
                    <input
                      placeholder="Type Something..."
                      className=" w-full py-3 pl-16 bg-[#F5F6FA] border border-[#E9E9F2] rounded-xl placeholder:font-medium placeholder:text-sm placeholder:text-[#7C7C8D]"
                    ></input>
                    <img
                      src={send}
                      className="absolute top-1/2 transform -translate-y-1/2 right-6"
                    />
                  </label>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
