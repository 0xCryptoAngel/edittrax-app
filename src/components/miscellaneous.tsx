
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";
import utility from "@images/utility.png";
// import utility from '../assets/utility.png;

gsap.registerPlugin(ScrollTrigger)

const features1 = [
  { name: 'FOR DJS', description: 'Download multiple edits (.wavs) of a track and rapidly edit it for your own dj performance, content creation, public use. *See collector rights ' },
  { name: 'FOR PRODUCERS', description: 'No 3rd party required. Removes all layers seperate of the collectible and marketplace when distributing token gated downloads. ' },
  { name: 'FOR COLLABS', description: 'An accessible build framework for musicians, designers and developers to use individual strengths to create meaningful collaborations ' },
  { name: 'FOR CULTURE', description: 'Supports 1 of 1 selector djs, unique dance-floor experiences and building the bottom of a funnel for independent music producers.' },
]
const features2 = [
  { name: 'TEZOS BLOCKCHAIN', description: 'TEZOS is a proof-of-steak protocol providing decentralized, trustless ledger technology in an energy efficient way. blah blah blah'},
  { name: 'FA2 CONTRACT', description: 'Minted on Hic Et Nunc (Teia), an FA2 Objkt Standard you own in your wallet like any self-custodied NFT'},
  { name: 'HTML / INTERACTIVE', description: 'HTML / Zip on IPFS following all best practices for interactive OBJKT development and aggregation as described on Hic Et Nunc Github.' },
  { name: 'BUY, SELL & DL', description: 'As a self-custodied token *Anywhere' },
]

const miscellaneous = () => {

  return (

  <section className="bg-black pt-0 px-0 pb-0 rounded-br mt-0 mx-2 md:mx-0">  


<div className="mb-14 mx-3 py-3 lg:mx-24 rounded-lg lg:py-12">


  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-0 px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8 mt-0 mb-8 lg:mb-0 "><div>
      <div className="font-mathias mb-8 text-center text-5xl text-yellow-75 mt-0 mb-12">
      USAGE
      </div>

      <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        
        {features1.map((feature) => (
          <div key={feature.name} className="">
            <dt className="font-mathias text-2xl text-yellow-75 text-center">{feature.name}</dt>
            <dd className="mt-2 text-sm text-gray-500 text-justify">{feature.description}</dd>
          </div>
        ))}
      </dl>
      
      </div>
      <img src={utility} alt="load" className=""/>
            
      <div className="bg-yellow-75 p-10 rounded-lg">
      
      <div className="font-mathias mb-8 text-center text-5xl text-black">
      TECH
      </div>
        <dl className="mt-22 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features2.map((feature) => (
            <div key={feature.name} className="border-tpt-4">
              <dt className="font-mathias text-2xl text-black ml-auto text-center">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500 text-justify">{feature.description}</dd>
              
            </div>
            
          ))}
        </dl>
      </div>

      
    </div>
  </div>


    <div className="mx-auto md:max-w-6xl gap-16 flex flex-col md:flex-row items-center">
      <dl className="w-full h-full md:w-1/2 flex align-middle items-center">
        <div className="container mx-auto">
          <div className=" mx-auto my-auto flex rounded-md shadow-sm align-middle center">
            <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className=""/>
          </div>
      </div>  
      </dl>
      <dl className="w-full md:w-1/2 flex align-middle items-center email">
          <iframe height="800px" src="https://cc76d0e7.sibforms.com/serve/MUIEAIHeq1wWTPotHxgrd5gMt7a-65w3pipknY7FQiKS9VyqIaYqgm7jemni1cUK9G4yy078DhblohBw1E2lkgk-FPjZ_XJixF9CIrVOMwP7PDp-zKxa1sBBCVWJ11Fga4LWjwUHS3ClVO9d4DP8MbnHU6Doqt-TNQBFP5xuyEPXCWmgZLaXPtivzEaaGvwP1u1XlHa9fM-B21M3" scrolling="auto" className="block ml-auto mr-auto w-full"></iframe>
      </dl>
    </div>

  </section>

  );
};

export default miscellaneous;
