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
    <section className="bg-yellow p-24 sm:p-8 mx-0 mb-12 sm:mt-12 md:mx-0 items-center flex flex-col justify-center bg-white">
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
          <div className="uppercase">
            <div>track name</div>
            <div>artist name</div>
          </div>
          <Progress 
            setIdx={setIdx} 
            idx={idx} 
          />
          <div className="w-full flex justify-center items-center gap-1">
            <div>0:00</div>
            <div className="h-1 w-3/5 bg-black rounded-full"></div>
            <div>0:00</div>
          </div>
          <div className="flex justify-center items-center border-4 border-black rounded-full p-1"><BsPlayFill className="text-3xl"/></div>
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>
      </div>     
    </section>
  );
};

const Progress = (props:any) => {
  let [currLength, setCurrLength] = useState<number>(0)
	let [length, setLength] = useState<number>(0)
	let options = useContext(userOptions)
	const progressBar: any = document.querySelector('.progressBar')
	
	const updateProgress = (e:any) =>{
		let offset = e.target.getBoundingClientRect().left
		let newOffSet = e.clientX
		let newWidth = newOffSet - offset
		progressBar.style.width = newWidth+"px"
		let secPerPx = length / 280
		player.currentTime = secPerPx * newWidth
	}
	
	setInterval(() => {
		setLength(Math.ceil(player.duration))
		setCurrLength(Math.ceil(player.currentTime))
		let secPerPx = Math.ceil(player.duration) / 280
		let newWidth = player.currentTime / secPerPx
		progressBar.style.width = newWidth+"px"
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
export default Collection;
