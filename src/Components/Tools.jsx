import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import vsImg from '../assets/vs-img.png'
import GithubImg from '../assets/Github-img.png'
import GitImg from '../assets/Git-img.png'

const Tools = () => {

  useEffect(() => {
    AOS.init({duration: "1000"});
  },[])

  return (
    <>
      <div className=" mt-24 flex items-center flex-col">
        <div  data-aos="zoom-in-up" className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Tools</h1>
        </div>

        <div className="w-3/4 mt-6 pl-14 grid grid-cols-3 ">
          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={vsImg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">VS Code</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={GithubImg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Github</h2>
          </div>

          <div data-aos="zoom-in-up" className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src={GitImg} />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Git</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
