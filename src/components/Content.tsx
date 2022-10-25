
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
  // lokt_612561={result?.lokt_612561} 
  lokt_612561:string | undefined,
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







    
    <section className="bg-yellow-75 flex flex-col items-center gap-0 px-4 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0 order-last" >
      
      
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



<h2 className="font-mathias mr-8 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
  <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-4 text-yellow-75 rounded-md hover:opacity-50">
  Collect
  </a>
  &nbsp; To Unlock
</h2>

<h2 className=" font-mathias mr-8 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
  <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-4 mt-8 text-yellow-75 rounded-md hover:opacity-50 mb-12">
  Connect
  </a>
  &nbsp; To Download
</h2>

       
{/* <h2 className=" font-mathias mr-8 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
  <a href="#" className="bg-black text-center px-4 py-4 mt-8 text-yellow-75 rounded-md hover:opacity-50">
  Edit
  </a>
  &nbsp;Trax
</h2>  */}

<h2 className="font-mathias mr-0 mt-0 md:mt-0 w-full text-sm sm:text-md lg:text-lg xl:text-2xl font-extrabold align-middle">
CREATE UNLIMITED EDITS OF {props.titleHardCode}
</h2>

<dt className="mb-4">
  <h3 className="mt-2 text-md">
  Extend parts of this track you like, remove parts of this track you don't like.<br></br><br></br>
  </h3>
</dt>
  

<h2 className="font-mathias mr-0 mb-4 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
    How To
</h2>
  
    
    <dd className="mb-8">

        <blockquote className="p-2 my-0 bg-black rounded-lg p-8 play_bg">
    <div className="flex items-start rounded-xlp-4 mt-2 justify-between">
    <div className="flex h-12 w-12 items-center justify-center origImg">
      <img src={original} alt="" className=""/> 
    </div>
    <div className="ml-4">
      <h2 className="text-xs text-black bg-yellow-75 rounded-xl text-right border-black border-2 p-3">Select A Pre Set Track Arrangement</h2>
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
    <img src={utility}  alt="" className="w-2/3 mt-6 ml-auto"/> 
  </blockquote>
      
    <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">





  


</blockquote>


<h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
            Rights
        </h2>
        <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
        <p>
        As the owner of this collectible, you are granted the right to perform its downloadable content in public. This includes playing in mix-tapes, online streams, social feeds, and live performances. You do NOT have the right to repackage downloaded content for resale or distribution. Assume NO other rights of ownership.
        {/* {props.description} */}
        </p>

        <dd className="mb-0 text-justify">
      
  
 




</dd>
          </blockquote>



    </dd>




      </dl> 
        
        



      <dl className="w-full md:w-2/3">

      <h2 className="font-mathias mr-8 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
            {/* Description
             */}
<div className="">
        <a href="https://objkt.com/asset/hicetnunc/612561" className="">

          Interactive Music OBJKT #{props.tokendId} comes integrated with a looper, token gate and download button.
   
        </a>
</div>
        <div className="mt-4 flex flex-wrap mb-20 pt-0 justify-left h-auto">
              { 
                props.keyValue?.map((item, i)=>
                <button className="bg-black mt-0 rounded-full px-6 py-1 text-yellow-75 text-xs gap-y-1.5 ml-2 mt-2" key={i}>{item}</button>
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
  
  
              {/* <a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>CONTRACT ADDRESS
              </a> */}
              
              
              </div>

    <div className="font-mathias w-52 mt-8">
            
            <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
    Contract on Tkz
    </a>
  
  
              {/* <a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>CONTRACT ADDRESS
              </a> */}
              
              
              </div>
  
  
              <div className="font-mathias w-52 mt-6">
              
              <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
    Creative on IPFS
    </a>       
                
                </div>


         {/* <h2 className="font-mathias w-52 md:mt-2 font-red-900 mb:2" ref={data}>MINTED {props.mintedDate}</h2>
          <div className="font-mathias w-52 mt-2"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>CONTRACT ADDRESS</a></div>
          <div className="font-mathias w-52 mt-2"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>LINK TO CREATIVE ON IPFS</a></div> */}
          <div className="font-mathias w-52 mt-2 mb-2 text-lg mt-10">DESCRIPTION</div>

<p>
{props.description}ts
</p>
  


</blockquote>



    {/* <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">  
      <div className="container py-0 mx-auto">
        <div className="mt-0 lg:-mx-0 lg:flex lg:items-top">
          <img src={handbookCover}  alt="" className="w-60"/> 
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="font-mathias text-sm text-red-900 uppercase">interactive music collectible</p>
            <a href="#" className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
              How it works
            </a>
          </div>
          <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>
        </div>
      </div>
    </blockquote> */}
     
  </dd>



























            {/* <dt className="mb-4">
              <h3 className="mt-8 text-justify">
              (1) Directly from your the music collectible when connected to this website or preferred Tezos marketplace. See below for limitations (EditTrax provides the best overall experience for this rapid-edit tool). <b>(2) While EditTrax players allow for the download of its content directly, collectors are provided an additional way to access content via LOCKT.IO</b>
              </h3>
            </dt>
            <dd className="mb-0 text-justify">
            <img src={props.lokt_612561} alt="rotating head" className="rounded-md"/>
            </dd>

            <dt className="mb-4">


            <dt className="mb-4 justify">
              <h3 className="mt-8 justify">

1) Navigate to: [https://lockt.io/u/804228b4-a553-4945-a8a5-947b09f9cc19](https://lockt.io/u/804228b4-a553-4945-a8a5-947b09f9cc19)
<br></br>
2) Sync your wallet holding OBJKT #612561
<br></br>
3) Download available content

An additional way to download Bai-ee’s “Acid Beach” (Original, Dub and Radio edits) PLUS the Alpha Test Players source code. 

#

              </h3>
            </dt>





            </dt> */}

            
            {/* <dd className="mb-0 text-justify">
            <img src={canIuse} alt="rotating head" className="rounded-md"/>
            </dd> */}









</dl>



    </div>




    






    
</div>










    </section>



);
};

export default Content;
