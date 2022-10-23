
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";



gsap.registerPlugin(ScrollTrigger)

type WalletProps = {
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
    <section className="bg-yellow-75 flex flex-col items-center gap-0 px-14 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0" >
      
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">

        <img src={props.square} alt="rotating head" className="w-md max-w-xs rounded-md"/>

        <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
          
          <div className="font-mathias text-3xl font-extrabold text-center">BAI-EE</div>
          {/* <div className="font-mathias text-2xl mt-4 text-2xl text-black text-center" >"{props.title}"</div> */}
          <div className="font-mathias text-2xl mt-4 text-2xl text-black text-center" >"{props.titleHardCode}"</div>
          <img className="w-lg max-w-sm sm:max-w-lg md:max-w-md" src={props.unlockable} alt="edittrax process"/>
        
        
        </div>























        
        
        
      </div>
      




  <div className="bg-lightblue py-4 px-4 mb-11">
    <div className="mx-auto max-w-6xl gap-16 flex flex-col md:flex-row">


    <dl className="w-full md:w-2/3">

    <h2 className="text-center sm:text-left font-mathias w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Edit & Download
        </h2>


        <div className="text-md space-y-4">



          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
    <div className="flex items-start rounded-xl bg-transparent">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>
      

      <div className="ml-4">
        <h2 className="font-semibold">PRESS PLAY ON TH EPLAYER</h2>
        <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
      </div>
    </div>

    <div className="flex items-start rounded-xlp-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">1823 Users</h2>
        <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl  p-4 ">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">548 Posts</h2>
        <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl p-4 ">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">129 Comments</h2>
        <p className="mt-2 text-sm text-gray-500">Last commented 8 days ago</p>
      </div>
    </div>
  </div>

  <h2 className="font-mathias mr-8 mt-12 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Metadata
        </h2>

  <h2 className="font-mathias w-52 md:mt-2" ref={data}>MINTED {props.mintedDate}</h2>
          <div className="font-mathias w-52"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>CONTRACT ADDRESS</a></div>
          <div className="font-mathias w-52"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black" ref={data}>LINK TO CREATIVE ON IPFS</a></div>







          <div className="container py-10 mx-auto">
        {/* <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1> */}

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
            <img src={handbookCover}  alt="" className="w-60"/> 
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="font-mathias text-sm text-red-900 uppercase">interative music collectible</p>

                <a href="#" className="font-mathias block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                   How it works
                </a>

                {/* <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p> */}

                <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>


            </div>
        </div>
    </div>





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

          <h2 className="font-mathias mr-8 mt-16 md:mt-0 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Rights
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

        </dl>

        


    </div>
</div>
















    </section>
  );
};

export default Content;
