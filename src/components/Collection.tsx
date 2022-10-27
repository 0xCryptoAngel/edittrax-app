import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
// import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";
import icon0 from "../assets/icon0.png";
import icon1 from "../assets/icon1.png";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import React, { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { type } from "os";
gsap.registerPlugin(ScrollTrigger)
type musicData = {
  trackName: string;
  artistName: string;
  src: string;
}
const musicTracks: musicData[] = [
  {
    trackName: "Memories",
    artistName: 'test',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "qweqwe",
    artistName: 'teqweqwest',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "sdfsdf",
    artistName: 'dfsdf',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  },
  {
    trackName: "fghfg",
    artistName: 'tasdfsdest',
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
  }
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
  const features = [
    { name: 'FOR DJS', description: 'Download preset stereo edits (.wavs) of a track, or create your own edits for public use/performance. ' },
    { name: 'FOR PRODUCERS', description: 'Removes 3rd-party digital service providers (and any layer other than the Collectible) when distributing tracks for download.' },
    { name: 'FOR COLLABS', description: 'An accessible build framework for musicians, designers and developers to create meaningful collaborations.' },
    { name: 'FOR CULTURE', description: 'Supporting 1 of 1 selector djs, unique dance-floor experiences and building the bottom of a funnel for independent producer/djs.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  return (
    <section className="bg-yellow p-24 sm:p-8 mx-0 mb-12 sm:mt-12 md:mx-0 items-center flex flex-col justify-center bg-white">
      <div className="font-mathias mb-14 text-center text-yellow-75 text-8xl">
        BROWSE TRAX
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-screen-xl hover:scale-75">
        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2 bg-brown-100">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <div className="text-center">
            <div>{musicTracks[0].trackName}</div>
            <div>{musicTracks[0].artistName}</div>
          </div>
          <AudioPlayer
            autoPlay
            style={{ backgroundColor: "#AC3434" }}
            src={musicTracks[0].src}
            showJumpControls={false}
            showFilledProgress={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>

        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2 bg-gray-400">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <div className="text-center">
            <div>{musicTracks[1].trackName}</div>
            <div>{musicTracks[1].artistName}</div>
          </div>
          <AudioPlayer
            autoPlay
            style={{ backgroundColor: "#9CA3AF" }}
            src={musicTracks[1].src}
            showJumpControls={false}
            showFilledProgress={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>

        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2">
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
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>

        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2 bg-yellow-125">
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
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>
      </div>     
 
    </section>
  );
};


export default Collection;
