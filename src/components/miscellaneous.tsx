
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";
import utility from "@images/utility.png";

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

  const features = [
    { name: 'FOR DJS', description: 'Download multiple edits (.wavs) of a track and rapidly edit it for your own content creation/performance use. ' },
    { name: 'FOR PRODUCERS', description: 'Remove 3rd-party download platforms (all layers seperate of the Collectible), when distributing tracks for download.' },
    { name: 'FOR COLLABS', description: 'An accessible build framework for musicians, designers and developers to create meaningful collaborations.' },
    { name: 'FOR CULTURE', description: 'Supports 1 of 1 selector djs, unique dance-floor experiences and building the bottom of a funnel for independent producer/djs.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  


  return (


    

  <section className="bg-black pt-0 px-8 pb-0 rounded-br mt-48 mx-4 md:mx-0">  

  



<div className="mx-auto md:max-w-6xl gap-16 flex flex-col md:flex-row ">


    


        <dl className="w-full h-full md:w-1/2 flex align-middle items-center">


        <div className="container mx-auto">
        <div className=" mx-auto my-auto flex rounded-md shadow-sm">
          {/* <img classNameName="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
          {/* <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="mb-8 ms:mb-0 w-60"/> */}
          {/* import handbookCover from "@images/handbookCover.jpg"; */}
{/* <img src={handbookCover}  alt="" className=""/>  */}
<img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className=""/>
  </div>

    </div>  


        </dl>
        <dl className="w-full h-full md:w-1/2 flex align-middle items-center email">





            {/* <div className="text-center">



                <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200 font-mathias rounded-lg">

                <div className="font-mathias mb-0 text-center text-6xl text-yellow-75">
        Contact
      </div>

                </h1>

            </div> */}





            <iframe height="1000px" src="https://cc76d0e7.sibforms.com/serve/MUIEAN0HS4VjA9Ip3AUNlVmAoJjDCZ4U4UKrdLhbWTy9-xNEjrJelQRNtZB8S8zXC56TOray5tzAoJsfRKuQmhjOe_tBgnennH2klXsHBvKo0GeuuL2UUU6T8f2aoAivDIUiSFzAYeID1F5NZOUMNnlDBTqhCT432sUxx3-kA6kVBnBo7ypPL1uG-ts_tfRUq6pgVg1zCmtVrHS6" scrolling="auto" className="block ml-auto mr-auto w-full h-full"></iframe>




            {/* <div className="m-7">
                <div id="form">

                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 bg-yellow-75 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 bg-yellow-75 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">

                        <label className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 bg-yellow-75 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                        <textarea name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border bg-yellow-75 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="font-mathias bg-black text-center bg-red-900 px-4 py-4 text-white rounded-md w-full hover:opacity-50">Send Message</button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result">
                    </p>
                </div>
            </div> */}






        </dl>

</div>

    
 
    
    







    






    </section>
  );
};

export default miscellaneous;
