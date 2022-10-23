
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
     
     
      {/* <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="mb-4">
          <div className="font-mathias mb-4 text-yellow-75 text-center text-2xl">EVENT SPACE</div>
          <div className="flex justify-center rounded-md">
              <img src={github_2} alt="github"/>

          </div>
        </div>
        <div className="mb-4">
          <div className="font-mathias text-yellow-75 mb-4 text-center text-2xl">WHERE I LIVE</div>
          <div className="flex justify-center rounded-md">
            <img src={marketplace_2} alt="market place"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="column">
          <div className="font-mathias mb-4 text-yellow-75 text-center text-2xl">GIGS</div>
          <div className="flex justify-center rounded-md">
          </div>
        </div>

        <div className="column">
          <div className="font-mathias mb-4 text-yellow-75 text-center text-2xl">UPCOMING EVENTS</div>
          <div className="flex justify-center rounded-md">

          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FChicago&showNav=0&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showTitle=0&mode=MONTH&title=EditTrax%20Event%20Calendar&src=ZWRpdHRyYXhuZnRAZ21haWwuY29t&color=%23039BE5" width="800" height="600" scrolling="no" className="calendar rounded-md"></iframe>
   
          </div>
        </div>
      </div> */}




    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
            <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="w-80 h-80"/>
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">category</p>

                <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    All the features you want to know
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>

                <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div className="flex items-center mt-6">
                    {/* <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""> */}
                    {/* <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="w-80 h-80"/> */}
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>






    </section>
  );
};

export default miscellaneous;
