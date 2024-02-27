import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import gitImg from '../assets/Github-img-black.png'
import linkdinImg from '../assets/Linkdin-img.png'
import fbImg from '../assets/Facebook_logo.png'
import instaImg from '../assets/Instagram_icon.png'

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: "1000"});
  },[])

  return (
    <>
      <div className=" flex items-center justify-center flex-col" id="contact">
        <dir data-aos="zoom-in-up">
        <h1 className=" mt-14 text-5xl font-bold text-gray-700">Contect Me</h1>
        </dir>
        <div className="w-10/12 h-auto pb-12 mt-14 bg-slate-400  ">
          <div className=" flex justify-center ">
            <span className="w-1/2 flex items-center justify-center flex-col">
              <div data-aos="fade-up-right" className="w-3/5 h-48 mt-14 rounded-2xl bg-white flex items-center justify-center flex-col">
                <h2 className=" mt-7 text-xl font-semibold text-gray-700">Email</h2>
                <h3 className=" mt-7 text-lg font-semibold text-gray-700">
                  jaidhussainz@gmail.com
                </h3>
                <h1 className=" mt-7 text-2xl font-semibold text-gray-700">email Now !</h1>
              </div>

              <div data-aos="fade-up-right" className="w-3/5 h-48 mt-14 rounded-2xl bg-white flex items-center justify-center flex-col">
                <h2 className=" mt-7 text-xl font-semibold text-gray-700">Phone Call</h2>
                <h3 className=" mt-7 text-lg font-semibold text-gray-700">+91 9131552123</h3>
                <h1 className=" mt-7 text-2xl font-semibold text-gray-700">Call Now !</h1>
              </div>

              <div data-aos="fade-up-right" className="w-3/5 h-48 mt-16 rounded-2xl bg-white flex items-center justify-center flex-col">
                <h2 className=" mt-7 text-xl font-semibold text-gray-700">Whatsapp</h2>
                <h3 className=" mt-7 text-lg font-semibold text-gray-700">+91 9131552123</h3>
                <h1 className=" mt-7 text-2xl font-semibold text-gray-700">Whatsapp Now !</h1>
              </div>
            </span>

            <div data-aos="fade-up-left" className="w-1/2 h-auto mt-10 mr-16 pl-6 bg-white flex flex-col rounded-3xl ">
              <h3 className="mt-11 text-xl font-medium text-gray-700">Your Name</h3>
              <input
                type="text"
                placeholder="Please Enter Name"
                className="w-96 h-11 pl-5 mt-2 rounded-lg border"
              />

              <h3 className="mt-8 text-xl font-medium text-gray-700">Email Address</h3>
              <input
                type="email"
                placeholder="Please Enter Email "
                className="w-96 h-11 pl-5 mt-2 rounded-lg border"
              />

              <h3 className="mt-8 text-xl font-medium text-gray-700">Phone Number</h3>
              <input
                type="number"
                placeholder="+91"
                className="w-96 h-11 pl-5 mt-2 rounded-lg border"
              />

              <h3 className="mt-8 text-xl font-medium text-gray-700">Message</h3>
              <input
                type="text"
                placeholder=""
                className="w-96 h-40 pl-5  mt-2 rounded-lg border"
              />

              <button className="w-40 h-12 mt-12  text-xl font-bold bg-slate-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                Submit
              </button>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="w-2/4 h-20 mt-12 ml-56 rounded-full bg-white flex items-center justify-center space-x-14">

            <a href="https://github.com/ZaidChops?tab=repositories" target=" ">
            <img className="w-10 h-10 hover:scale-125 transition-all duration-500" src={gitImg}/>
            </a>
            <a href="https://www.linkedin.com/in/jaid-hussain-z/" target=" ">
            <img className="w-10 h-10 hover:scale-125 transition-all duration-500" src={linkdinImg} />
            </a>
            <img className="w-10 h-10 hover:scale-125 transition-all duration-500" src={fbImg} />
            <img className="w-10 h-10 hover:scale-125 transition-all duration-500" src={instaImg} />

          </div>
        </div>
        <div className="w-full h-9 mt-7 bg-slate-400 flex items-center justify-center text-white">
          <h2>Designed by Mohammad Zaid with Love</h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
