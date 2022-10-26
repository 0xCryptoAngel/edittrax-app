
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




gsap.registerPlugin(ScrollTrigger)


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

  
  const [show, setShow] = useState(false)

  const features = [
    { name: 'FOR DJS', description: 'Download multiple edits (.wavs) of a track and rapidly edit it for your own content creation/performance use. ' },
    { name: 'FOR PRODUCERS', description: 'Remove 3rd-party download platforms (all layers seperate of the Collectible), when distributing tracks for download.' },
    { name: 'FOR COLLABS', description: 'An accessible build framework for musicians, designers and developers to create meaningful collaborations.' },
    { name: 'FOR CULTURE', description: 'Supports 1 of 1 selector djs, unique dance-floor experiences and building the bottom of a funnel for independent producer/djs.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
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
  <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-red-900 text-center px-4 py-4 text-yellow-75 rounded-md hover:opacity-50">
  Collect
  </a>
  &nbsp; To Unlock
</h2>

<h2 className=" font-mathias mr-8 md:mt-0 w-full text-lg text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-12">
  <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-orange-900 text-center px-4 py-4 mt-8 text-yellow-75 rounded-md hover:opacity-50 mb-12">
  Connect
  </a>
  &nbsp; To Download
</h2>





{/* <h2 className="font-mathias mr-0 mt-0 md:mt-0 w-full text-sm sm:text-md lg:text-lg xl:text-2xl font-extrabold align-middle">
CREATE UNLIMITED EDITS OF {props.titleHardCode}
</h2>

<dt className="mb-4">
  <h3 className="mt-2 text-md">
  Extend parts of this track you like, remove parts of this track you don't like.<br></br><br></br>
  </h3>
</dt> */}
  

<h2 className="font-mathias mr-0 mb-4 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
    How To
</h2>

<blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">

</blockquote>

  
<img src={props.player_thumbnail}  alt="" className=""/> 

<dd className="mb-8">

<blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">

</blockquote>

<h2 className="font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
      Rights
        </h2>
        <blockquote className="p-4 my-4 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800">
        <p>
        You do NOT have the right to repackage edits for profit or distribution.
        As the owner of this collectible music player you are free to dj its content in public, online and most preferably abandoned warehouses.
        Assume NO other rights of ownership than if you had downloaded it off Bandcamp or Digital Service Provider.
        {/* {props.description} */}
        </p>

        {/* <dd className="mb-0 text-justify">
      
  
</dd> */}
          
</blockquote>



</dd>




</dl> 
        
        



      <dl className="w-full md:w-2/3">

      <h2 className="font-mathias mr-8 mb-0 sm:mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle mb-12">
            {/* Description
             */}
<div className="">
        <a href="https://objkt.com/asset/hicetnunc/612561" className="">

          Interactive Music OBJKT #{props.tokendId} comes integrated with a looper, token gate and download button.
   
        </a>
</div>
        <div className="mt-4 flex flex-wrap mb-0 sm:mb-20 pt-0 justify-left h-auto">
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

<p>
{props.description}
</p>

</blockquote>

</dd>

</dl>

</div>

</div>






<div className="bg-black mb-14 rounded-lg p-10">
            <div className="font-mathias mb-8 text-center text-8xl text-yellow-75">
          FAQ
          </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-0 px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8 mt-0 mb-0">
        <div>
          {/* <div className="font-mathias mb-0 text-center text-4xl text-yellow-75 mt-8">
          For A Head Full of Loops
          </div> */}
          {/* <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p> */}

          <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="">
                <dt className="font-mathias text-2xl text-yellow-75 ">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>

          {/* <img src={utility}  alt="" className="mt-8"/> */}
          
        </div>
        
        <div className="">

        {/* <div className="font-mathias mb-0 text-center text-4xl text-yellow-75 mt-8">
          For A Head Full of Loops
          </div> */}
          {/* <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p> */}

          <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-tpt-4">
                <dt className="font-mathias text-2xl text-yellow-75">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>



        </div>



      </div>
    </div>


















{/* <div className="p-4 text-gray-600">
	<h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">This is - what we do :</h1>

	<ul className="grid place-content-center sm:grid-cols-2 gap-8">
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Research</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We love numbers! We collect data and insights, analyze
					them then take the time to learn about your objectives, ask the right questions to understand your
					business.</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Strategey</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
					strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Design</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We design the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Development</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">05.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Deployment</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
	</ul>
</div> */}

</section>

);
};

export default Content;
