import React from "react";
import HeroImage from "../assets/avt.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* Ảnh cho màn hình nhỏ */}
        <div className="small-screen hidden md:hidden block">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-[70%]"
          />
        </div>

        {/* Nội dung chính */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a recent graduate looking for opportunities to learn and gain more practical experience.
            I have worked on several web applications using technologies such as React, Java, and MySQL.
            I’m passionate about web development, always eager to learn new things, and ready to take on challenges to improve my skills.
          </p>

          <div className="portfolio-btn">
            <a
              href="/cv.pdf"
              download
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download CV
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        {/* Ảnh cho màn hình lớn */}
        <div className="big-screen hidden md:block">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
