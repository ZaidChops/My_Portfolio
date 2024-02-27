import React, { useEffect, useState } from "react";
import mylogo from "../assets/my-logo-4.png"
import mylogo1 from "../assets/my-logo-2.png"
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [color, setColor] = useState(false);
  const [s,setS] = useState(false)

  const set = ()=>{
    // setS(s ? false : true)
    setS((pre)=>!pre)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      <div
        className={`${color
            ? "w-full h-16 z-50 shadow-xl flex items-center justify-between flex-grow-1 fixed  bg-white text-gray-700 transition-all"
            : "w-full h-20 z-50  flex items-center justify-between flex-grow-1 fixed  bg-transparent text-white transition-all"
          }`}
      >
        <div className="w-32 ml-16">
          {!color ? <img src={mylogo}/> : <img src={mylogo1}/> }
          {/* #594C8D */}
        </div>
        <ul className=" flex  justify-end  ">
        {s &&   <div data-aos="fade-down" data-aos-duration="1200" className=" ">
            <a href="#home" className="mr-6 text-xl font-semibold">
              Home
            </a>
          </div>}
         {s &&  <div data-aos="fade-down" data-aos-duration="1000" className="">
            <a href="#about" className="mr-6 text-xl font-semibold">
              About
            </a>
          </div>}

          {s && <div data-aos="fade-down" data-aos-duration="800" className="">
            <a href="#skills" className="mr-6 text-xl font-semibold">
            Skills
          </a>
        </div>}
        {s &&   <div data-aos="fade-down" data-aos-duration="600" className="">
            <a href="#project" className="mr-6 text-xl font-semibold">
              Projects
            </a>
          </div>}
       {s &&    <div data-aos="fade-down" data-aos-duration="400" className="">
            <a href="#contact" className="mr-10 text-xl font-semibold">
              Contact
            </a>
          </div>
          // :
          // <div data-aos="fade-down" data-aos-duration="400" className="">
          //   <a href="#contact" className={color ? "mr-10 text-xl font-semibold text-black" : "mr-10 text-xl font-semibold text-white"}>
          //     Contact
          //   </a>
          // </div>
          }
          <button className="mr-10 w-24 hover:scale-110 transition-all duration-500 " onClick={set}>{!s ? <SlMenu style={color ? { fontSize:"40px", color:"#374151"} : { fontSize:"40px", color:"white"}}  /> : <RxCross2 style={color ? { fontSize:"40px", color:"#374151"} : { fontSize:"40px", color:"white"}} />}</button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
