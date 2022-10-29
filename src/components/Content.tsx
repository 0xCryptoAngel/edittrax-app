
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";
import masterPlay from "@images/master_play.png";
import loopPlay from "@images/loop_play.png";
import unlock from "@images/unlock.png";
import editLoop from "@images/edit_loop.png";
import lock from "@images/lock.png";
import original from "@images/original.png";
import utility from "@images/utility.png";
import play_bg from "@images/play_bg.jpg";
import canIuse from "@images/canIuse.jpg";
import howToImage from "../Modal/image_popup_howTo";
import useAnalyticsEventTracker from 'Modal/analytics';
import Modal from "../Modal/Modal";
import { disableScroll, enableScroll } from "utils/scroll";

type WalletProps = {
  // origEdit: string | undefined,
  // loopPlay: string | undefined,
  // editLoop: string | undefined,
  // masterPlay:  string | undefined,
  // lock:  string | undefined,
  // lokt_612561={result?.lokt_612561} 
  lokt_612561:string | undefined,
  player_thumbnail:string | undefined,
  tokendId: string | undefined,
  artist: string | undefined,
  titleHardCode: string | undefined,
  square:  string | undefined,
  unlockable:  string | undefined,
  title: string | undefined,
  keyValue: string[] | undefined,
  description: string | undefined,
  mintedDate: string | undefined,
  ipfs: string | undefined,
  address: string | undefined,
};

gsap.registerPlugin(ScrollTrigger)

const Content = (props:WalletProps) => {

  const data = useRef(null);

  useEffect(() => {
    const dat = data.current;
    gsap.fromTo(dat, {opacity:1, y:75}, {opacity:1, y:0, duration:0.25,
      scrollTrigger: {
        trigger:dat,
        scrub: 1,
      }
    });
  });

  const gaEventTracker = useAnalyticsEventTracker('Contact us');

  const [show, setShow] = useState<boolean>(false)
  
  return (

  <section className="bg-yellow-75 flex flex-col items-center gap-0 px-4 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0 order-last" >
              
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8 mb-0">
      <img src={props.square} alt="rotating head" className="w-md max-w-xs rounded-md"/>
      <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
        <div className="font-mathias text-7xl font-extrabold text-center">{props.titleHardCode}</div>
        <div className="font-mathias text-2xl mt-0 text-4xl text-black text-center" >{props.artist}</div>
        <img src={props.unlockable} alt="rotating head" className="w-md mb-10"/>
      </div>
    </div>
        
    <div className="bg-lightblue py-4 px-0 mb-0">
      <div className="mx-auto max-w-6xl gap-0 sm:gap-16 flex flex-col md:flex-row sm:mt-10">
        <dl className="w-full md:w-2/3">
          <h2 className=" font-mathias mr-8 md:mt-0 w-full text-lg text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-12">
            <a href="https://objkt.com/asset/hicetnunc/612561" className="outline_button text-center px-4 py-4 mt-8 text-black rounded-md hover:opacity-50 mb-12">
              EDIT
            </a>
            &nbsp; The Track
          </h2>

          <h2 className="font-mathias mr-8 mt-0 sm:mt-6 md:mt-0 w-full text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-12">
            <button className="bg-red-900 text-center px-4 py-4 text-yellow-75 rounded-md hover:opacity-50" onClick={()=> {setShow(true); disableScroll();}}>
              Collect
            </button>
            &nbsp; To Unlock
          </h2>
          <h2 className=" font-mathias mr-8 md:mt-0 w-full text-lg text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-12">
            <button className="bg-orange-900 text-center px-4 py-4 mt-8 text-yellow-75 rounded-md hover:opacity-50 mb-12" onClick={()=> {setShow(true); disableScroll();}}>
            Connect
            </button>
            &nbsp; To Download
          </h2>
          <Modal onClose = {() => {setShow(false); enableScroll()}} show={show}/>

          <h2 className="font-mathias mr-0 mb-4 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
              How To Track Out
          </h2>

          <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
          </blockquote>

          <img src={props.player_thumbnail}  alt="" className=""/> 
          
          <dd className="mb-8">

            <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
            </blockquote>

            <h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
              Collector Rights
            </h2>

            <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">    
              <p>
                  As the owner of this collectible music player you are free to dj its content strictly within abandoned warehouse environments.
                  No other rights of ownership can be assumed seperate than if you had downloaded this off Bandcamp.
              </p>          
            </blockquote>
          </dd>
        </dl> 
    
        <dl className="w-full md:w-2/3">
        <h2 className="font-mathias mr-8 mb-0 sm:mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
          <div className="text-justify">
            <a href="https://objkt.com/asset/hicetnunc/612561" className="">
              Interactive Music OBJKT #{props.tokendId} comes integrated with a looper, token gate and download button.
            </a>
          </div>

          <div className="mt-4 flex flex-wrap mb-0 sm:mb-20 pt-0 justify-left h-auto">
          { 
            props.keyValue?.map((item, i)=>
            <button className="mt-0 rounded-3xl text-black px-0 py-0 text-xs gap-y-1.5 ml-2 mt-2 outline_button" key={i}>{item}</button>
            )
          }
          </div>
        </h2>

        <h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
          Metadata
        </h2>
    
        <dd className="mb-8">

          <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
          <div className="font-mathias w-52 mt-2">    
            <a href="https://objkt.com/asset/hicetnunc/612561" className="text-left px-0 py-0 text-black rounded-md hover:opacity-50 text-lg">
            OBJKT #{props.tokendId}
            </a>
          </div>

          <div className="font-mathias w-52 mt-8">          
            <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
            Contract on Tkz
            </a>
          </div>
          
          <div className="font-mathias w-52 mt-6">
            <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
            Creative on IPFS
            </a>       
          </div>

          <div className="font-mathias w-52 mt-2 mb-2 text-lg mt-10">DESCRIPTION</div>

          <p className="text-justify">
          {props.description}
          </p>
          </blockquote>
        </dd>
      </dl>
    </div>
    </div>
  
</section>

);
};

export default Content;
