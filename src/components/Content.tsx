
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




gsap.registerPlugin(ScrollTrigger)

type WalletProps = {
  // origEdit: string | undefined,
  // loopPlay: string | undefined,
  // editLoop: string | undefined,
  // masterPlay:  string | undefined,
  // lock:  string | undefined,
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

const Content = (props:WalletProps) => {
  console.log("props.mintedDate", props.description)

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
  
  return (
    <section className="bg-yellow-75 flex flex-col items-center gap-0 px-4 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0" >
      
      
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8 mb-0">
        <img src={props.square} alt="rotating head" className="w-md max-w-xs rounded-md"/>
        <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
          <div className="font-mathias text-7xl font-extrabold text-center">{props.titleHardCode}</div>
          {/* <div className="font-mathias text-2xl mt-4 text-2xl text-black text-center" >"{props.title}"</div> */}
          <div className="font-mathias text-2xl mt-0 text-4xl text-black text-center" >{props.artist}</div>
          <img src={props.unlockable} alt="rotating head" className="w-md mb-10"/>
          {/* <h3 className="font-mathias text-xl mt-4 text-xl text-black text-center">
            OBJKT #{props.tokendId}
          </h3> */}

        </div>
      </div>
      




<div className="bg-lightblue py-4 px-0 mb-0">
  


<div className="mx-auto max-w-6xl gap-16 flex flex-col md:flex-row sm:mt-10">


        <dl className="w-full md:w-2/3">



        <h2 className="font-mathias mr-8 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
            {/* Description
             */}

        <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-4 text-yellow-75 rounded-md hover:opacity-50">
          Collect
        </a>
        &nbsp; To Unlock Downloads
        </h2>

            <dt className="mb-4">
                <h3 className="mt-8 text-md sm:text-xl font-semibold">
                You are Viewing Interactive Music OBJKT #{props.tokendId}
                </h3>
            </dt>

            <dd className="mb-0 text-justify">

              <p>
              {props.description}
              </p>

              <div className="mt-4 flex flex-wrap mb-20 pt-0 justify-left h-auto">
                { 
                  props.keyValue?.map((item, i)=>
                  <button className="bg-black mt-0 rounded-full px-4 py-1 text-yellow-75 text-xxs gap-y-1.5 ml-2 mt-2" key={i}>{item}</button>
                  )
                }
              </div>

            </dd>



          <h2 className="font-mathias mr-8 mt-0 md:mt-20 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
            {/* Description
             */}

        <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-4 text-yellow-75 rounded-md hover:opacity-50">
          Connect
        </a>
        &nbsp; To Download
        </h2>
            <dt className="mb-4">
                <h3 className="mt-8 text-md sm:text-xl font-semibold">
                Download from OBJKT #{props.tokendId} On Popular
                </h3>
            </dt>
            <dd className="mb-0 text-justify">

            <img src={canIuse} alt="rotating head" className="rounded-md"/>

                
                <p>
                Twsdfsdfs
                </p>

                Download from OBJKT #{props.tokendId} On Popular


            </dd>








      </dl> 
        



      <dl className="w-full md:w-2/3">

        <h2 className="font-mathias mr-0 mt-0 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
        Music Player Interface
        </h2>

        <dt className="mb-4">
                <h3 className="mt-8 text-md sm:text-xl font-semibold">
                *See embedded player above
                </h3>
            </dt>
  
      <dd className="mb-0 text-justify font-semibold text-yellow-75 bg-black rounded-xl p-1 mb-8">

      <blockquote className="p-2 my-0 bg-black rounded-lg p-8 play_bg">

      <div className="flex items-start rounded-xlp-4 mt-2 justify-between">
          <div className="flex h-12 w-12 items-center justify-center origImg">
            
          <img src={original} alt="" className=""/> 

          </div>
          <div className="ml-4">
            <h2 className="text-xs text-black bg-yellow-75 rounded-xl text-right border-black border-2 p-3">Select A Pre Set Track Arrangement</h2>
            {/* <p className="mt-2 text-xs text-gray-500 mb-4 text-right">Download or use as starting point</p> */}
          </div>
        </div>


        <div className="flex items-start rounded-xlp-4 mt-2 justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
          <img src={loopPlay}  alt="" className="w-60"/> 
          </div>
          <div className="ml-4">
            <h2 className="font-semibold text-right text-xs text-black bg-yellow-75 text-right rounded-xl border-black p-3">Preview Different Sections of the Track</h2>
            {/* <p className="mt-2 text-xs text-gray-500 text-right">These loops play back to back creating a track</p> */}
          </div>
        </div>

      <div className="flex items-start rounded-xlp-4 mt-2 justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
          <img src={editLoop}  alt="" className="w-60"/> 
          </div>
        <div className="ml-4">
          <h2 className="font-semibold text-right text-xs text-black bg-yellow-75 text-right rounded-xl border-black p-3">Adjust Loop Count To Create New Tracks</h2>
          {/* <p className="mt-2 text-xs text-gray-500 text-right">Remove or extend parts of this track</p> */}
        </div>
      </div>

      <div className="flex items-start rounded-xlp-4 mt-2 justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
          <img src={masterPlay}  alt="" className="w-60"/> 
          </div>
        <div className="ml-4">
          <h2 className="font-semibold text-right text-black text-xs bg-yellow-75 text-right rounded-xl border-black p-3">Preview Master Track / Edit You Created</h2>
          {/* <p className="mt-2 text-xs text-gray-500 text-right">Last checked 3 days ago</p> */}
        </div>
      </div>

      <div className="flex items-start rounded-xlp- mt-2 justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
          <img src={lock}  alt="" className="w-60"/> 
          </div>
        <div className="ml-4">
          <h2 className="font-semibold text-right text-xs text-black bg-yellow-75 text-right rounded-xl border-black p-3">Collect to Unlock Unlimited Downloads </h2>
          {/* <p className="mt-2 text-xs text-gray-500 text-right">Last checked 3 days ago</p> */}
        </div>
        
      </div>

      {/* <dt className="mb-0">
        <h3 className="mt-4 text-md sm:text-xl font-semibold text-black">
        *See embedded player above
        </h3>
    </dt> */}


<img src={utility}  alt="" className="w-2/3 mt-6 ml-auto"/> 

      </blockquote>


    </dd>


  <h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
    Rights
</h2>
  
    
    <dd className="mb-8">
    <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
        <p>
        As the owner of this collectible, you are granted the right to perform its downloadable content in public. This includes playing in mix-tapes, online streams, social feeds, and live performances. You do NOT have the right to repackage downloaded content for resale or distribution. Assume NO other rights of ownership.
        {/* {props.description} */}
        </p>


</blockquote>

<h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
            Metadata
        </h2>
        <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
  
  <h2 className="font-mathias w-52 md:mt-2" ref={data}>MINTED {props.mintedDate}</h2>
          <div className="font-mathias w-52"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>CONTRACT ADDRESS</a></div>
          <div className="font-mathias w-52"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>LINK TO CREATIVE ON IPFS</a></div>

          </blockquote>

          <h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
            Handbook
        </h2>

          <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
  
  
<div className="container py-0 mx-auto">
   <div className="mt-0 lg:-mx-0 lg:flex lg:items-top">
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
            <img src={handbookCover}  alt="" className="w-60"/> 
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="font-mathias text-sm text-red-900 uppercase">interactive music collectible</p>

                <a href="#" className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
                   How it works

                </a>

                {/* <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p> */}


            </div>

            <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

        </div>
    </div>

    </blockquote>

    </dd>




</dl>



    </div>




    






    
</div>










    </section>



);
};

export default Content;
