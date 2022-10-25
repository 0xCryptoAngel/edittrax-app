
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";

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
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  

  return (


    

  <section className="bg-black pt-0 px-8 pb-0 rounded-br mx-4 md:mx-0">  



<div className="mx-auto max-w-6xl gap-16 flex flex-row">


    


        <dl className="w-1/2 md:w-2/3">


        <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10p-5 rounded-md shadow-sm">
          {/* <img classNameName="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
          {/* <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="mb-8 ms:mb-0 w-60"/> */}
          {/* import handbookCover from "@images/handbookCover.jpg"; */}
<img src={handbookCover}  alt="" className=""/> 
  </div>

    </div>  


        </dl>
        <dl className="w-1/2 md:w-2/3">



        <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 p-5 rounded-md shadow-sm">
            <div className="text-center">



                <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200 font-mathias rounded-lg">

                <div className="font-mathias mb-0 text-center text-6xl text-yellow-75">
        Contact
      </div>

                </h1>

            </div>
            <div className="m-7">
                <div id="form">

                    {/* <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                    <input type="hidden" name="subject" value="New Submission from Web3Forms">
                    <input type="checkbox" name="botcheck" id="" style="display: none;"> */}


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
            </div>
        </div>
    </div>





        </dl>

</div>

    
 
    
    







    






    </section>
  );
};

export default miscellaneous;
