
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const miscellaneous = () => {

  // const misc = useRef(null);

  // useEffect(() => {

  //   const mis = misc.current;
  //   gsap.fromTo(mis, {opacity:1, y:75}, {opacity:1, y:0, duration:0.25,
  //     scrollTrigger: {
  //       trigger:mis,
  //       scrub: 1,
  //     }
  //   });
  // });


  

  return (


  <section className="bg-black pt-0 px-8 pb-0 rounded-br mx-4 md:mx-0">    
    <div className="container px-0 py-0 mx-auto mb-6 md:mb-0 flex flex-col align-middle items-center sm:items-start">
      

        <div className="">
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
            <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="mb-8 ms:mb-0 w-60"/>
           
        </div>
    </div>






    </section>
  );
};

export default miscellaneous;
