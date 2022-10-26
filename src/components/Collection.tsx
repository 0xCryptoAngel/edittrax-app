import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
// import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";
import icon0 from "../assets/icon0.png";
import icon1 from "../assets/icon1.png";

import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback, useContext, createContext } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
gsap.registerPlugin(ScrollTrigger)

const tracks = [
  {
    name: "Mekanın Sahibi",
    artist: "Norm Ender",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
  },
  {
    name: "Rag'n'Bone Man",
    artist: "Human",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
  }]
const player = new Audio(tracks[0].source)
player.setAttribute('preload', 'metadata')
const userOptions = createContext({
  shuffle: false,
  repeat: false,
})

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
  
          let [idx, setIdx] = useState<number>(0);
	let [playState, setPlayState] = useState<boolean>(false);
	let oldIdx = useRef(idx)
	useEffect(() => {
		if(playState === true)
			player.play()
		else
			player.pause()
		if(idx !== oldIdx.current){
			player.pause()
			player.src = tracks[idx].source
			player.load()
			player.play()
			setPlayState(true)
			oldIdx.current = idx
		}
	})

  return (
    <section className="bg-yellow p-24 sm:p-8 mx-0 mb-12 sm:mt-12 md:mx-0 items-center flex flex-col justify-center">


  
      <div className="font-mathias mb-14 text-center text-6xl text-yellow-75">
        BROWSE TRAX
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-screen-lg hover:scale-75">
        {/* <Link to="/edit-trax/mechanism" id="open"> */}
          {/* <img src={QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj} alt="open-source" className="hover:w-2xl rounded-md"/> */}
        {/* </Link>
        <Link to="/edit-trax/alpha-test"  id="acid"> */}
          {/* <img src={QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1} alt="acid beach" className="hover:shadow-2xl rounded-md"/> */}
        {/* </Link>
        <Link to="/edit-trax/burnt" id="burnt"> */}
          {/* <img src={QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX} alt="burnt" className="hover:shadow-2xl rounded-md"/> */}
        {/* </Link> */}
        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <Avatar idx={idx}/>
          <Progress 
            setIdx={setIdx} 
            idx={idx} 
          />
          <Control 
            setIdx={setIdx} 
            idx={idx}  
            playState={playState} 
            setPlayState={setPlayState}
          />
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>
      </div>     
    </section>
  );
};

const Avatar = (props:any) => {	
	return(
		<>
      <div className="uppercase text-center">
        <div>{tracks[props.idx].artist}</div>
        <div>{tracks[props.idx].name}</div>
      </div>
		</>
	);
}

const Progress = (props:any) => {
  let [currLength, setCurrLength] = useState<number>(0)
	let [length, setLength] = useState<number>(0)
	let options = useContext(userOptions)
	const progressBar = document.querySelector('.progressBar') as HTMLDivElement
	
	const updateProgress = (e:any) =>{
		let offset = e.target.getBoundingClientRect().left
		let newOffSet = e.clientX
		let newWidth = newOffSet - offset
    if (progressBar != null) {
      progressBar.style.width = newWidth+"px"
    }
		let secPerPx = length / 280
		player.currentTime = secPerPx * newWidth
	}
	
	setInterval(() => {
		setLength(Math.ceil(player.duration))
		setCurrLength(Math.ceil(player.currentTime))
		let secPerPx = Math.ceil(player.duration) / 280
		let newWidth = player.currentTime / secPerPx
    if (progressBar != null) {
      progressBar.style.width = newWidth+"px"
    }
		if(player.currentTime === player.duration){
			if(options.shuffle === true){
				props.setIdx((Math.floor(Math.random()*1000))%9)
			}
			else if(options.repeat === true){
				player.play()
			}
			else{
				props.setIdx((props.idx+1)%9)
			}
		}
	}, 1000);
	
	const formatTime = (s:any) => {
		return Number.isNaN(s) ? '0:00' : (s-(s%=60))/60+(9<s?':':':0')+s
	}
	
	return(
		<div className="progress">
			<div className="currentTime">
				<p>{formatTime(currLength)}</p>
			</div>
			<div 
			className="progressCenter" 
			onClick={(e) => updateProgress(e)}>
				<div className="progressBar">
				</div>
			</div>
			<div className="songLength">
				<p>{formatTime(length)}</p>
			</div>
		</div>
	);
}

const Control = (props:any) => {
	return(
		<div className="flex justify-center items-center border-4 border-black rounded-full p-1">
			{
				props.playState === true ? 
					<button 
						className=""
						onClick={x => props.setPlayState(false)}>
						<BsPauseFill className="text-3xl"/>
					</button> : 
					<button
						className=""
						onClick={x => props.setPlayState(true)}>
						<BsPlayFill className="text-3xl"/>
					</button>
			}
		</div>
	);
}
export default Collection;
