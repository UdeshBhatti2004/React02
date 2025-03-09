import React from "react";
import logo from "../images/logo.png";
import watch from "../images/Watch.png";
import Svg from "./Svg";
import Svgd from "./Svgd";
// rgb(245,228,218)

function Random() {
  return (
    <>
      <div className="header bg-[rgb(245,228,218)] min-h-full w-full ">
        <div className="head-sec-1">
          <div className="nav-bar flex justify-around ">
            <div className="logo-div flex">
              <img className="h-9 w-9  mt-8" src={logo} alt="logo" />
              <h1 className="text-3xl font-bold mt-8 mx-1 ">Premat</h1>
            </div>
            <div className="nav-element flex gap-8 text-lg mt-10 font-bold">
              <h1>Home</h1>
              <h1>Features</h1>
              <h1>About</h1>
              <h1>Product</h1>
              <h1>Faq</h1>
              <h1>Testimonial</h1>
              <h1>Contact</h1>
            </div>
          </div>
        </div>

        <div className="header-sec-2 flex  ">
          <div className="part-1 bg-red-300 w-3/5	">
            <div className="content mx-32">
              <div className="large-content text-7xl font-bold flex-wrap mt-44 leading-16 ">
                <h1>Smart Digital</h1>
                <h1>Watch For</h1>
                <h1>Luxurious Life</h1>
              </div>
              <div className="small-content flex flex-col mt-5 ">
                <p className="text-md tracking-tighter">
                  Donec nec justo fells eget fells facsilities
                  ferementum.Allquam porttitor
                </p>
                <p className="text-md tracking-tighter">
                  mauris sit amet oreci.Aenean diggnissim pelllenteesque fells.
                </p>
              </div>
            </div>
          </div>
          <div className="part-2 w-2/5 	">
            <div className="watch-image mt-40 ">
              <img className="h-96 w-96" src={watch} alt="watch" />
            </div>
          </div>
        </div>
           <div className="part-3 ">
                <button className=" bg-[rgb(239,72,21)] text-white mt-10
                p-3">
                  Buy Products
                </button>
             <Svgd />
           </div>
      </div>
          

      <div className="middleh-screen w-full">
        <div className="div">
          <Svg />
        </div>
      </div>
    </>
  );
}

export default Random;
