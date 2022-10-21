
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

type WalletProps = {
  square:  string | undefined,
  unlockable:  string | undefined,
  title: string | undefined,
  keyValue: string[] | undefined,
  description: string | undefined,
  mintedDate: string | undefined,
  ipfs: string | undefined,
  address: string | undefined,
};

const Content = (props:WalletProps) => {
  console.log("props.mintedDate", props.description)





  const data = useRef(null);

  useEffect(() => {

    const dat = data.current;

    //WITH Timelines (cleaner, more versatile)
// var tlMain = gsap.timeline({repeat: 0, repeatDelay: 0});
// tlMain.fromTo(ld, {opacity:1}, {opacity:0, height:0, y:-5000, delay:1.25, duration:.025});
// tlMain.fromTo(db, {opacity:0, y:20}, {opacity:1, y:0, duration:.25});

gsap.fromTo(dat, {opacity:0, y:75}, {opacity:1, y:0, duration:.75,

  scrollTrigger: {
  
            trigger:dat
        
        }







});

// gsap.fromTo(dat, {opacity:0, y:75}, {opacity:1, y:0, duration:.75,

//   scrollTrigger: {
  
//         trigger:dat
    
//     }



}

);

  












  return (
    <section className="bg-yellow-75 flex flex-col items-center gap-16 px-14 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0" ref={data}>
      
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">

        <img src={props.square} alt="rotating head" className="w-md max-w-xs rounded-md"/>

        <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
          <div className="font-mathias text-6xl font-bold text-center">BAI-EE</div>
          <div className="font-mathias text-2xl mt-4 text-2xl text-black text-center">"{props.title}"</div>
          <img className="w-lg sm:max-w-xs md:max-w-md"src={props.unlockable} alt="edittrax process"/>
        
        
        </div>
        
        
      </div>
      




      <div className="bg-lightblue py-0 px-4">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
    <dl className="w-full md:w-2/3">
        <h2 className="font-mathias mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Metadata
        </h2>

        <div className="font-mathias text-md space-y-4">
          <h2 className="w-52 md:mt-2">MINTED {props.mintedDate}</h2>
          <div className="w-52"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">CONTRACT ADDRESS</a></div>
          <div className="w-52"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">LINK TO CREATIVE ON IPFS</a></div>
        </div>

      </dl> 



      


        <dl className="w-full md:w-2/3">

        <h2 className="font-mathias mr-8 mt-16 md:mt-0 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Description
        </h2>
            <dt className="mb-4">
                <h3 className="mt-2 text-xl font-semibold">
                    Collect to unlock high fidelity downloads (.wav) files.
                </h3>
            </dt>
            <dd className="mb-8">
                <p>
                {props.description}
                </p>
            </dd>

            <div className="flex flex-wrap gap-4 mb-24 pt-0 justify-center">
          { 
            props.keyValue?.map((item, i)=>
              <button className="bg-black rounded-full px-4 py-1 text-yellow-75 text-xxs" key={i}>{item}</button>
            )
          }
          </div>
        </dl>

        


    </div>
</div>










    </section>
  );
};

export default Content;
