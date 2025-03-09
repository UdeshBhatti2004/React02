import React from "react";
import logo from "../images/logo.png";
import watch from "../images/Watch.png";
import Svg from "./Svg";
import Svgd from "./Svgd";
import cloud from "../images/cloud.png";
import computer from "../images/computer.png";
import tech from "../images/tech.png";
import user from "../images/user.png";
import watch2 from "../images/Watch2.png";
import tick from "../images/green-icon.png"
// rgb(245,228,218)

function Hero() {
  return (
    <>
      <div
        className="header bg-[rgb(245,228,218)] min-h-full w-full 
      sm:min-h-full sm:w-full 
      md:h-full md:w-full
      lg:h-full lg:w-full
      xl:h-full xl:w-full
      2xl:h-full 2xl:w-full "
      >
        <div className="head-sec-1 ">
          <div className="nav-bar flex justify-around flex-wrap ">
            <div className="logo-div flex mx-4
            sm:mx-5
            md:mx-5
            lg:mx-5
            xl:-mx-5
            2xl:mx-1
             ">
              <img
                className="h-7 w-7  mt-8 
               sm:h-7  sm:w-7
               md:h-9 md:w-9 
               lg:h-9 lg:w-9
               xl:h-9 xl:w-9
               2xl:h-9 2xl:w-9"
                src={logo}
                alt="logo"
              />
              <h1
                className="text-xl  font-bold mt-8 mx-1 
              sm:text-xl
              md:text-3xl
              lg:text-3xl
              xl:text-3xl 
              2xl:text-3xl"
              >
                Premat
              </h1>
            </div>
            <div
              className="nav-element flex gap-2   mt-10 font-bold
              text-[12px]
            sm:text-[14px]
            md:text-lg
            lg:text-lg 
            xl:text-lg 
            2xl:text-lg 
            sm:gap-6
            md:gap-6
            lg:gap-8
            xl:gap-8
            2xl:gap-8"
            >
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

        <div className="header-sec-2 flex  justify-around">
          <div className="content  ">
            <div
              className="large-content text-3xl font-bold flex-wrap mt-10 leading-20 
              min-[320px]: max-[473px]:mx-8 
              min-[320px]: max-[473px]:text-2xl
             sm:text-5xl sm:mx-1  sm:mt-20
             md:text-6xl md:mx-1  md:mt-20
             lg:text-7xl  lg:mx-5  lg:mt-20
            xl:text-7xl  xl:mx-5   xl:mt-20
             2xl:text-7xl 2xl:mx-5  2xl:mt-20"  
            >
              <h1>Smart Digital</h1>
              <h1>Watch For</h1>
              <h1>Luxurious Life</h1>
            </div>
            <div
              className="small-content flex flex-col mt-5 mx-1
              sm:mx-1
              md:mx-2
              lg:mx-5
              xl:mx-5
              2xl:mx-5
            "
            >
              <p
                className="text-[7.2px] tracking-tighter
                max-[473px]:text-[5px] 
                max-[473px]:mx-7
                max-[473px]:tracking-tighter
               sm:text-[11px]
               md:text-sm
               lg:text-md	
               xl:text-[17px]
               2xl:text-[17px]"
              >
                Donec nec justo fells eget fells facsilities ferementum.Allquam
                porttitor
              </p>
              <p
                className="text-[7.2px] tracking-tighter
                max-[473px]:text-[5px]
                max-[473px]:mx-7
                 max-[473px]:tracking-tighter
               sm:text-[11px] 
               md:text-sm
               lg:text-md
               xl:text-lg
               2xl:text-md "
              >
                mauris sit amet oreci.Aenean diggnissim pelllenteesque fells.
              </p>
              <div className="button  relative z-10 flex  ">
                <button
                  className=" bg-[rgb(239,72,21)] text-white p-2 mt-12
                  text-[10px]
                    max-[473px]:mx-7 
                sm:p-2 sm:text-base
                md:p-2 md:sm:text-base
                lg:p-3 lg:sm:text-base
                xl:p-3  xl:text-base
                2xl:p-3 2xl:text-base" 
                >
                  Buy Products
                </button>
              </div>
            </div>
          </div>
          <div className="watch-image mt-20 
          max-w-full 
          max-[473px]:mt-10 ">
            <img
              className="h-36 w-36
              sm:h-56 sm:w-56
              md:h-64 md:w-64
              lg:h-80 lg:w-80
              xl:h-96 xl:w-96
              2xl:h-96 2xl:w-96"
              src={watch}
              alt="watch"
            />
          </div>
        </div>

        <div className="-mt-24 sm:-mt-36 md:-mt-44 lg:-mt-52  xl:-mt-52 2xl:-mt-52	">
          <Svgd />
        </div>
      </div>

      <div className="middle   h-full w-full	">
        <div className="svg -mt-2
          sm:-mt-2
        ">
          <Svg />
        </div>
        <div className="middle-headings text-center">
          <h1 className="text-2xl  font-bold
             sm:text-3xl
             md:text-4xl
             lg:text-4xl
             xl:text-4xl
             2xl:text-4xl
          ">Product Features</h1>
          <p className="text-[10px] font-medium mt-3
            sm:text-base
             md:text-base
             lg:text-base
             xl:text-base
             2xl:text-base
          ">
            Donec nec justo eget fells facsilities ferementum Allquam porttitor
            sit
          </p>
          <p className="text-[10px] font-medium
             sm:text-base
             md:text-base
             lg:text-base
             xl:text-base
             2xl:text-base
          ">
            amet oreci.Aenean diggnissim pelllenteesque fells
          </p>
        </div>

        {/* <div className="icon-image-1 flex ">
          <div className="boxes-content flex justify-evenly mt-16 ">
            <div className="box-1 bg-orange-300 bg-opacity-60 h-28 w-28 rounded-full  flex flex-col justify-center items-center drop-shadow-xl	 ">
              <div className="box  bg-orange-200 opacity-80 drop-shadow-lg	h-24 w-24 rounded-full flex justify-center items-center">
                <img
                  className="h-20 w-20 object-contain"
                  src={cloud}
                  alt="cloud "
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="images mt-14 grid  grid-cols-2 gap-4 justify-items-center 
          sm:flex sm: justify-evenly
          md:flex md:justify-evenly
          lg:flex      lg:justify-evenly
          xl:flex      xl:justify-evenly
          2xl:flex     2xl:justify-evenly
        ">
          <div className="image-1 ">
            <div className="test flex justify-center ">
              <div
                className="box-1 bg-orange-300 bg-opacity-60 h-20 w-20 rounded-full  flex flex-col justify-center items-center drop-shadow-xl	
            sm:h-20  sm:w-20 
            md:h-24  md:w-24 
            lg:h-28  lg:w-28
            xl:h-28  xl:w-28
            2xl:h-28  2xl:w-28"
              >
                <div
                  className="box  bg-orange-200 opacity-80 drop-shadow-lg	h-16 w-16 rounded-full flex justify-center items-center
            sm:h-16  sm:w-16 
            md:h-20  md:w-20
            lg:h-24  lg:w-24
            xl:h-24  xl:w-24
            2xl:h-24  2xl:w-24 "
                >
                  <img
                    className="h-12 w-12 object-contain
                  sm:h-12 sm:w-12
                  md:h-16 md:w-16
                  lg:h-20 lg:w-20
                  xl:h-20 xl:w-20
                  2xl:h-20 2xl:w-20"
                    src={cloud}
                    alt="cloud "
                  />
                </div>
              </div>
            </div>
            <div className="image-content-1 text-center">
              <h1
                className="text-sm font-bold
              sm:text-sm
              md:text-md
              lg:text-lg
              xl:text-lg 
              2xl:text-lg 
              "
              >
                High Quality
              </h1>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base
              "
              >
                Donec nec justo eget fells facsilities
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base
              "
              >
                ferementum Allquam porttitor
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                mauris sit amet
              </p>
            </div>
          </div>

          {/* 2nd Image */}

          <div className="image-1 ">
            <div className="test flex justify-center">
              <div
                className="box-1 bg-orange-300 bg-opacity-60 h-20 w-20 rounded-full  flex flex-col justify-center items-center drop-shadow-xl	
            sm:h-20  sm:w-20 
            md:h-24  md:w-24
            lg:h-28  lg:w-28
            xl:h-28  xl:w-28
            2xl:h-28  2xl:w-28 "
              >
                <div
                  className="box  bg-orange-200 opacity-80 drop-shadow-lg	h-16 w-16 rounded-full flex justify-center items-center
            sm:h-16  sm:w-16 
            md:h-20  md:w-20
            lg:h-24  lg:w-24
            xl:h-24  xl:w-24
            2xl:h-24  2xl:w-24"
                >
                  <img
                    className="h-10 w-10 object-contain
                  sm:h-10 sm:w-10
                  md:h-12 md:w-12
                  lg:h-16 lg:w-16
                  xl:h-16 xl:w-16
                  2xl:h-16 2xl:w-16"
                    src={computer}
                    alt="cloud "
                  />
                </div>
              </div>
            </div>
            <div className="image-content-1 text-center">
              <h1
                className="text-sm font-bold
              sm:text-sm
              md:text-md
              lg:text-lg
              xl:text-lg 
              2xl:text-lg 
              "
              >
                Awesome Design
              </h1>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                Donec nec justo eget fells facsilities
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                ferementum Allquam porttitor
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                mauris sit amet
              </p>
            </div>
          </div>

          {/* 3rd Image */}

          <div className="image-1 ">
            <div className="test flex justify-center">
              <div
                className="box-1 bg-orange-300 bg-opacity-60 h-20 w-20 rounded-full  flex flex-col justify-center items-center drop-shadow-xl	
              sm:h-20  sm:w-20 
            md:h-24  md:w-24
            lg:h-28  lg:w-28
            xl:h-28  xl:w-28
            2xl:h-28  2xl:w-28 "
              >
                <div
                  className="box  bg-orange-200 opacity-80 drop-shadow-lg	h-16 w-16 rounded-full flex justify-center items-center
                 sm:h-16  sm:w-16 
            md:h-20  md:w-20
            lg:h-24  lg:w-24
            xl:h-24  xl:w-24
            2xl:h-24  2xl:w-24"
                >
                  <img
                    className="h-10 w-10 object-contain
                    sm:h-10 sm:w-10
                  md:h-12 md:w-12
                  lg:h-16 lg:w-16
                  xl:h-16 xl:w-16
                  2xl:h-16 2xl:w-16"
                    src={tech}
                    alt="cloud "
                  />
                </div>
              </div>
            </div>
            <div className="image-content-1 text-center">
              <h1
                className="text-sm font-bold
              sm:text-sm
              md:text-md
              lg:text-lg
              xl:text-lg 
              2xl:text-lg 
              "
              >
                Latest Technology
              </h1>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base
              "
              >
                Donec nec justo eget fells facsilities
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                ferementum Allquam porttitor
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                mauris sit amet
              </p>
            </div>
          </div>

          {/* 4 Image */}

          <div className="image-1 ">
            <div className="test flex justify-center ">
              <div
                className="box-1 bg-orange-300 bg-opacity-60 h-20 w-20 rounded-full  flex flex-col justify-center items-center drop-shadow-xl	
              sm:h-20  sm:w-20 
            md:h-24  md:w-24
            lg:h-28  lg:w-28
            xl:h-28  xl:w-28
            2xl:h-28  2xl:w-28 "
              >
                <div
                  className="box  bg-orange-200 opacity-80 drop-shadow-lg	h-16 w-16 rounded-full flex justify-center items-center
                 sm:h-16  sm:w-16 
            md:h-20  md:w-20
            lg:h-24  lg:w-24
            xl:h-24  xl:w-24
            2xl:h-24  2xl:w-24"
                >
                  <img
                    className="h-10 w-10 object-contain
                    sm:h-10 sm:w-10
                  md:h-12 md:w-12
                  lg:h-16 lg:w-16
                  xl:h-16 xl:w-16
                  2xl:h-16 2xl:w-16"
                    src={user}
                    alt="cloud "
                  />
                </div>
              </div>
            </div>
            <div className="image-content-1 text-center">
              <h1
                className="text-sm font-bold
              sm:text-sm
              md:text-md
              lg:text-lg
              xl:text-lg 
              2xl:text-lg "
              >
                User Friendly
              </h1>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                Donec nec justo eget fells facsilities
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                ferementum Allquam porttitor
              </p>
              <p
                className="text-[10px]
              sm:text-[10px]
              md:text-[10px]
              lg:text-sm
              xl:text-base
              2xl:text-base"
              >
                mauris sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

         <div className="footer bg-[rgb(239,239,239)] h-[750px]
            sm:h-[500px]
            md:h-[500px]
            lg:h-[550px]
            xl:h-[550px]
            2xl:h-[550px]
         
         flex mt-32 w-full justify-center  ">
              <div className="parts flex flex-wrap justify-center
              mt-10 gap-5 
                sm:mt-16
                md:mt-16
                lg:mt-16
                xl:mt-16
                2xl:mt-16
              ">
                  <div className="part-1 ">
                    <div className="image">
                      <img className="h-60 w-60
                      
                      sm:h-64  sm:w-64  
                      md:h-72 md:w-72                     
                      lg:h-96   lg:w-96
                      xl:h-96   xl:w-96
                      2xl:h-96  2xl:w-96
                      
                      rotate-[17deg]	 object-contain mt-12" src={watch2} alt="black watch"/>
                    </div>
                  </div>
                  <div className="part-2">
                           <div className="box h-max w-max p-8
                               sm:h-96 sm:w-auto sm:p-4
                               md:h-96  md:w-auto md:p-4
                               lg:h-max  lg:w-max lg:p-8
                               xl:h-max  xl:w-max   xl:p-8
                               2xl:h-max 2xl:w-max  2xl:p-8
                           bg-[rgb(245,245,245)] drop-shadow-lg mx-5 flex flex-col
                           ">
                                <div className="box-content">
                                  <h1 className="font-bold tex-xl
                                  sm:text-xl sm:
                                  md:text-2xl md:mt-4
                                  lg:text-3xl lg:
                                  xl:text-3xl xl:
                                  2xl:text-3xl  2xl: 

                                  ">About The Product</h1>
                                  <p className="text-[9.5px]
                                     sm:text-[9.5px] 
                                     md:text-xs
                                     lg:text-sm
                                     xl:text-sm
                                     2xl:text-sm
                                  ">Lorem ipsum dolor sit amet.constercutor audipiciding elit. corrupti,</p> 
                                  <p className="text-[9.5px]
                                     sm:text-[9.5px]
                                     md:text-xs
                                     lg:text-sm
                                     xl:text-sm
                                     2xl:text-sm
                                  ">neque ipsam repuidiandae nam ratione volupatates</p>
                                </div>
                                <div className="icon-content mt-5 flex flex-col gap-3">
                                  <div className="icon-content-1 flex items-center gap-2 ">
                                  <img className="h-4 w-4
                                    sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm
                                     sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Model No #240 Blackmart</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2 ">
                                  <img className="h-4 w-4 
                                    sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm
                                     sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Camera Resloution 24 Mega Pixel</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2">
                                  <img className="h-4 w-4 
                                   sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm 
                                      sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Image Processor DIGIC 7</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2">
                                  <img className="h-4 w-4
                                    sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm
                                      sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Effective Pixel Approx.24.20 megapixels</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2 ">
                                  <img className="h-4 w-4 
                                   sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm 
                                      sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Aspect Ratio 3:2</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2">
                                  <img className="h-4 w-4
                                    sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm
                                       sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Lens Mount EF/EF-S</h1>
                                  </div>
                                  <div className="icon-content-1 flex items-center gap-2">
                                  <img className="h-4 w-4 
                                    sm:h-4 sm:w-4
                                    md:h-4 md:w-4
                                    lg:h-5  lg:w-5
                                    xl:h-5  xl:w-5
                                    2xl:h-5 2xl:w-5
                                  object-contain" src={tick}/>
                                  <h1 className="font-bold text-sm
                                       sm:text-sm
                                     md:text-sm
                                     lg:text-lg  
                                     xl:text-lg
                                     2xl:text-lg

                                  ">Focal Length Equivalent to 1.6x</h1>
                                  </div>
                                </div>
                           </div>
                  </div>
              </div>
         </div>
    </>
  );
}

export default Hero;
