
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
    <section className="bg-black pt-12 px-8 pb-12 rounded-br mx-4 md:mx-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center text-2xl">HANDBOOK</div>
          <div className="flex justify-center rounded-md">
            <img src={handbook_2} alt="handbook"/>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center text-2xl">MARKETPLACE</div>
          <div className="flex justify-center rounded-md">
            <img src={marketplace_2} alt="market place"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="column">
          <div className="font-mathias mb-4 text-center text-2xl">GITHUB</div>
          <div className="flex justify-center rounded-md">
            <img src={github_2} alt="github"/>
          </div>
        </div>

        <div className="column">
          <div className="font-mathias mb-4 text-center text-2xl">GITHUB</div>
          <div className="flex justify-center rounded-md">
            <img src={github_2} alt="github"/>
          </div>
        </div>





        
      </div>
    </section>
  );
};

export default miscellaneous;
