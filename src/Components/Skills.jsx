import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import htmlimg from "../assets/Html-img.png";
import cssimg from "../assets/CSS-img.png";
import jsimg from "../assets/JS-img.png";
import reactimg from "../assets/React-img.png";
import reduximg from "../assets/redux-icon.png";
import mongoimg from "../assets/mongo-logo.png";
import nodeimg from "../assets/Node-img.png";
import expressimg from "../assets/Express-img.png";
import dsaimg from "../assets/Dsa-img.png";
import tailimg from "../assets/Tailwind-img.png";
import muiImg from "../assets/Mui-img.png";
import Bootstrapimg from "../assets/Bootstrap-img.png";

const Skills = () => {

  useEffect(() => {
    AOS.init({duration: "1000"});
  },[])

  return (
    <>
      <div className=" mt-24 flex items-center flex-col" id="skills">
        <div data-aos="zoom-in-up" className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Technical Skills</h1>
        </div>

        <div className="w-3/4 mt-10 pl-14 grid grid-cols-4  ">
          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse ">
            <img className="w-32" src={htmlimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">HTML</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={cssimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">CSS</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={jsimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Java Script
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={reactimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">React</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={reduximg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Redux</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={mongoimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Mongo Db
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={nodeimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Node js
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={expressimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Express js
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={dsaimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">DSA</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center justify-around flex-col hover:animate-pulse">
            <img className="w-32" src={tailimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Tailwind CSS
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={muiImg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Material UI
            </h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center justify-around flex-col hover:animate-pulse">
            <img className="w-32" src={Bootstrapimg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">
              Bootstrap
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
