import React from "react";

const Home = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="overlay"></div>
        <div className="flex flex-row items-center justify-center z-30">
          <span>
            <h2 className="text-4xl font-bold text-gray-700 ">
              Hello My Name Is
            </h2>
            <h1 className="text-6xl font-bold mt-8 text-gray-700">
              Mohammad Zaid
            </h1>
            <h2 className="text-4xl font-small mt-6 text-gray-600">
              Full Stack Web Developer
            </h2>
            <a href="#project">
              <button className="w-36 h-12 text-md my-6 hover:scale-110 transition-all duration-500  text-white bg-gray-700 rounded-xl">
                Visit my work
              </button>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
