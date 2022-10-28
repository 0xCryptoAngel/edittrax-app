import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import founder from "../assets/founder.png";
// import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";
import icon0 from "../assets/icon0.png";
import icon1 from "../assets/icon1.png";
// import et01 from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import et02 from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import et01 from "../assets/square_burnt.png";
import AudioPlayer from 'react-h5-audio-player'; // import react audio module 
import 'react-h5-audio-player/lib/styles.css'; //css of it

import React, { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { type } from "os";
gsap.registerPlugin(ScrollTrigger)

// media player data Type
type musicData = {
  trackName: string;
  artistName: string;
  src: string;
}

// media player data
const musicTracks: musicData[] = [
  {
    trackName: "ACID BEACH",
    artistName: 'Bai-ee',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "BURNT",
    artistName: 'Bai-ee',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "BOXXED",
    artistName: 'Bai-ee',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "UNTITLED",
    artistName: 'Bai-ee',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
]


const Collection = () => {
  const collection = useRef(null);

  useEffect(() => {
    const col = collection.current;
    gsap.fromTo(col, {opacity:1, y:75}, {opacity:1, y:0, duration:0.25,
      scrollTrigger: {  
        trigger:col,
        scrub: 1,
      }
    });
  });

  return (

    <section className="bg-black m-0 mb-12 sm:mt-0 md:mx-0 items-center flex flex-col justify-center pl-4 pr-4">

      

<div className="font-mathias mt-24 mb-0 mx-6 text-center text-yellow-75 text-5xl sm:text-7xl">
        GENESIS COLLECTION
      </div>


<div className="relative sm:mt-12 min-w-0 break-words gap-0 bg-black w-full mb-6 shadow-lg rounded-xl mt-4 text-yellow-75 flex flex-col lg:flex-row content-center">
































      <div className="px-0 flex flex-col sm:flex-row w-full lg:w-2/3">

        <div className="flex flex-wrap justify-center flex-col">
          
          <div className="mr-auto ml-auto mt-0 mb-0 ml-0 gap-2 flex w-auto flex-col mx-0 h-auto items-center">

            <img src={founder} alt="founder_pic" className="rounded-full h-auto w-lg lg:w-md"/>

            <div className="w-full text-center mt-0 opacity-0 h-0 md:ml-12">

                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                        <span className="text-sm text-slate-400">Photos</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                        <span className="text-sm text-slate-400">Followers</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                        <span className="text-sm text-slate-400">Following</span>
                    </div>
                </div>
            </div>

        </div>
        
      </div>

      <div className="mr-auto mt-0 mb-0 ml-0 gap-2 flex flex-col mx-0 h-auto items-center lg:items-left">

        <div className="w-full lg:w-2/3 lg:px-0">

          <div className="pl-0 gap-0 flex flex-row items-center">

            <div className="text-center sm:text-left mt-0 w-full">
              <h3 className="font-mathias text-5xl text-slate-700 font-bold leading-normal -mb-4 text-center sm:text-left">BAI-EE</h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase mt-2">
                  {/* <i className="font-mathias fas text-left mb-0 fa-map-marker-alt mr-0 text-slate-400 opacity-75"></i> */}
                  Chicago, Il
              </div>
            </div>

          </div>

          <p className="font-light leading-relaxed text-slate-600 mb-4 text-justify text-xs ">   Bai-ee is a House Dj/producer, Live Performance Act and Record Label Owner based in Chicago. His Genesis Collection consists of 4 original tracks available for the first time as collectible music. Customize each track fro your own performance within within these interactive Music OBJKTs.</p>

          <div className="pl-0 gap-1 flex flex-row lg:content-left">
            <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75 w-auto text-center px-4 py-1 text-black text-xs rounded-md hover:opacity-50">
              Website
            </a>
            <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75 w-auto text-center px-4 py-1 text-black text-xs rounded-md hover:opacity-50">
              Twitter
            </a>
            <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="font-mathias bg-yellow-75  w-auto text-center px-4  py-1 text-black text-xs rounded-md hover:opacity-50">
              Discogs
            </a>
          </div>

        </div>



</div>





      </div>


      <div className="bg-black mx-0 mb-4 w-auto rounded-sm px-0 mt-24 lg:mt-8">
      
      {/* Players */}
      {/* <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12"> */}
      <div className="grid grid-cols-1 gap-6 mx-0 max-w-screen-xl hover:scale-75 h-auto">

      {/* Player 1 */}

      <div className="mb-0 lg:mb-0 border-5 border-yellow-75 ">
      {/* <div className="bg-white block rounded-lg shadow-lg">  */}
        <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
          {/* <img alt="icon0" className="w-full h-auto"/> */}
          <img src={et01} alt="icon1" className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"/>

          <div className="flex-row flex m-0 w-96 justify-around md:mt-0">
          <div className="text-left w-auto pl-0">
            <div>{musicTracks[0].trackName}</div>
            <div>{musicTracks[0].artistName}</div>
            <div className="text-xxs">Acid Techno</div>
          </div>
          <AudioPlayer 
            autoPlay
            style={{ backgroundColor:"#ffffff" }} // media player background color 
            src={musicTracks[0].src} // media source
            showJumpControls={false} // Jump control remove
            showFilledProgress={false} // show filled process color
            customVolumeControls={[]} // Volume control remove
            customAdditionalControls={[]} // addition control remove
          />
          <div className="border-0 border-black bg-yellow-75 text-black shadow-4xl rounded-md px-3 py-1 p-7 hover:text-gray-300">
            <Link to="/edit-trax/burnt">
              <button className="uppercase leading-tight mt-5">
              more info
              </button>
            </Link>
          </div>
          </div>
        </div>
        {/* </div> */}
        </div>

      {/* Player 2 */}
      
        {/* <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2 bg-gray-500">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <div className="text-center">
            <div>{musicTracks[1].trackName}</div>
            <div>{musicTracks[1].artistName}</div>
          </div>
          <AudioPlayer
            autoPlay
            style={{ backgroundColor: "#6B7280" }}
            src={musicTracks[1].src}
            showJumpControls={false}
            showFilledProgress={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
          <div className="border-4 border-black rounded-md px-3 py-1 hover:text-gray-300">
            <Link to="/edit-trax/mechanism">
              <button className="uppercase">edit this track</button>
            </Link>
          </div>
        </div> */}

      {/* Player 3*/}
      
        {/* <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <div className="text-center">
            <div>{musicTracks[2].trackName}</div>
            <div>{musicTracks[2].artistName}</div>
          </div>
          <AudioPlayer
            autoPlay
            src={musicTracks[2].src}
            showJumpControls={false}
            showFilledProgress={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
          <div className="border-4 border-black rounded-md px-3 py-1 hover:text-gray-300">
            <Link to="/edit-trax/alpha-test">
              <button className="uppercase">edit this track</button>
            </Link>
          </div>
        </div> */}

      {/* Player 4 */}
      
        {/* <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2 bg-yellow-125">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <div className="text-center">
            <div>{musicTracks[3].trackName}</div>
            <div>{musicTracks[3].artistName}</div>
          </div>
          <AudioPlayer
            autoPlay
            style={{ backgroundColor: "#A6752B" }}
            src={musicTracks[3].src}
            showJumpControls={false}
            showFilledProgress={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
          <div className="border-4 border-black rounded-md px-3 py-1 hover:text-gray-300">
            <Link to="/edit-trax/dapp">
              <button className="uppercase">edit this track</button>
            </Link>
          </div>
        </div> */}

      </div>     
    </div>





</div>










     
    </section>
  );
};


export default Collection;
