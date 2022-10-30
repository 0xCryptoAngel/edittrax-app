
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
import useAnalyticsEventTracker from 'Modal/analytics';
import Modal from "../Modal/Modal";
import DropDown from "../components/DropDown";
import thumb from "@images/thumbnail.jpg";
import all_markets from "@images/all_markets.png";
import all_devices from "@images/all_devices.png";
import { scrollTop } from "utils/scroll";
import player_thumbnail from "@images/et01_instructions.png";
import howToImage from "../Modal/image_popup_howTo";
import et01_head from "@images/square_alpha_test.png";






// import Marketplaces from "../Modal/Marketplaces";
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

  <section className="bg-yellow-75 flex flex-col items-center gap-0 px-4 py-5 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0 order-last" >
              
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8 mb-0">
      <img src={et01_head} alt="rotating head" className="w-md max-w-xs rounded-md"/>
      <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
        <div className="font-mathias text-7xl font-extrabold mt-8 text-center">{props.titleHardCode}</div>
        <div className="font-mathias text-2xl mt-0 text-4xl text-black text-center" >{props.artist}</div>
        <div className="mt-0 flex flex-wrap mb-0 sm:mb-0 pt-0 justify-left h-auto">

        <div className="mt-2 flex flex-wrap mb-0 sm:mb-2 pt-0 justify-center h-auto">


        { 
        props.keyValue?.map((item, i)=>
          <button className="rounded-3xl flex content-center text-yellow-75 px-2 py-1 text-xxs gap-y-1 ml-1 mt-1 mt-0 outline_button uppercase" key={i}>{item}</button>
          )
        }

</div>


        </div>

      </div>

      <dl className="w-full md:w-2/3">
        <h2 className="font-mathias mr-8 mb-0 sm:mt-0 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-0">

          <div className="mt-4 flex flex-wrap mb-0 sm:mb-20 pt-0 justify-left h-auto">

          </div>
        </h2>





      </dl>


    </div>
        
    <div className="bg-lightblue py-4 px-0 mb-0">
      <div className="mx-auto max-w-6xl gap-0 sm:gap-16 flex flex-col md:flex-row sm:mt-10">
        <dl className="w-full md:w-2/3">

        <h2 className="font-mathias mr-8 md:mt-0 w-full text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0">
            <button className="outline_button_main bg-yellow-75 text-center w-34 py-4 px-11 mt-0 text-black rounded-md mb-4" onClick={()=> {scrollTop();}}>
            Edit 
            </button>
            &nbsp; This Track
          </h2>

          <h2 className="font-mathias mr-8 mt-0 sm:mt-6 md:mt-0 w-full text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-4">
          {/* <Marketplaces onClose = {() => {setShow(false); enableScroll()}} show={show}/> */}
          
            <button className="bg-red-900 w-34 text-center py-4 px-6 text-yellow-75 rounded-md  hover:opacity-50 " onClick={()=> {setShow(true); disableScroll();}}>
              Collect 
            </button>
            &nbsp; To Unlock
          </h2>
          <h2 className="font-mathias mr-8 md:mt-0 w-full text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0">
            <button className="bg-orange-900 w-34 text-center py-4 px-4 mt-0 text-yellow-75 rounded-md hover:opacity-50 mb-12 drop-shadow-md" onClick={()=> {setShow(true); disableScroll();}}>
            Connect 
            </button>
            &nbsp; To Download
          </h2>
          <Modal onClose = {() => {setShow(false); enableScroll()}} show={show}/>

          <h2 className="font-mathias mt-4 mr-0 mb-0 w-full text-6xl text-center sm:text-2xl lg:text-xl xl:text-3xl font-extrabold align-middle uppercase">
          {/* Interactive Music OBJKT #{props.tokendId} comes integrated with a looper, token gate and download button. */}
        BE A 1 OF 1 SELECTOR
          </h2>

          <div className="text-left text-mathias mt-2 mb-2 leading-tight bg-black p-5 text-yellow-75 rounded-lg">
            <a href="https://objkt.com/asset/hicetnunc/612561" className="uppercase font-mathias">
              Interactive Music OBJKT #{props.tokendId} comes integrated with a looper, token gate and download button.
            </a>
          </div>
          
          <h2 className="font-mathias text-center mr-0 mt-16 md:mt-0 w-full text-4xl sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
        Create 1 of 1 Edits
        </h2>

            <img src={player_thumbnail}  alt="" className=""/> 

                   
        {/* <blockquote className="p-4 mt-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
        </blockquote> */}



          <h2 className="font-mathias mt-16 text-center mr-0 mt-0 md:mt-0 w-full text-4xl sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
        Across Any Marketplace
        </h2>

            <img src={all_markets}  alt="" className=""/> 
            <h2 className=" mr-0 mb-0 md:mt-0 text-center w-full text-sm sm:text-lg lg:text-xl xl:text-3xl align-middle">
        EditTrax provides the best UX
            </h2>
        

        <h2 className=" mr-0 mb-2 md:mt-0 text-center w-full text-xxs sm:text-lg lg:text-xl xl:text-3xl align-middle">
        {/* EditTrax provides the best UX */}
            </h2>
            {/* <blockquote className="p-4 mt-0 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
          </blockquote> */}


          <h2 className="font-mathias mt-16 text-center mr-0 md:mt-0 w-full text-4xl sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
          On Any Device
        </h2>


        <img src={all_devices} alt="rotating head" className="w-md mb-2 mt-2 "/>




            <h2 className=" mr-0 mb-2 md:mt-0 text-center w-full text-sm sm:text-lg lg:text-xl xl:text-3xl align-middle">
        EditTrax provides the best UX
            </h2>
          
          <dd className="mb-8">

           
          </dd>
        </dl> 
    
        <dl className="w-full md:w-2/3">
       

        <h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
          Metadata
        </h2>
    
        <dd className="mb-8">

          <blockquote className="p-4 my-0 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
          {/* <div className="font-mathias w-52 mt-2">    
            <a href="https://objkt.com/asset/hicetnunc/612561" className="text-left px-0 py-0 text-black rounded-md hover:opacity-50 text-lg">
            OBJKT #{props.tokendId}
            </a>
          </div> */}

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

          <div className="font-mathias w-52 mt-2 mb-2 text-lg mt-10">Description</div>

          <p className="text-justify">
          {props.description}
          </p>

          <h2 className="text-justify font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
              Collector Rights
            </h2>
              <p className="text-justify">
                  Owners of OBJKT #{props.tokendId} are allowed to create, download and dj edits of its contained track "BURNT". Collectors are not allowed to repackage edits for sale or distribution. Assume no other rights
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
