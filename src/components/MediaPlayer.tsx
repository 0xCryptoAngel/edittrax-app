
import React, { useState, useRef, useEffect, useCallback, useContext, createContext } from "react";
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

const tracks = [
  {
    name: "Mekanın Sahibi",
    artist: "Norm Ender",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
  },
  {
    name: "Everybody Knows",
    artist: "Leonard Cohen",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
    favorited: true
  },
  {
    name: "Extreme Ways",
    artist: "Moby",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
    favorited: false
  },
  {
    name: "Rag'n'Bone Man",
    artist: "Human",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
  }]
export const player = new Audio(tracks[0].source)
player.setAttribute('preload', 'metadata')
const userOptions = createContext({
  shuffle: false,
  repeat: false,
})


export const Data = (props:any) => {	
	return(
		<>
      <div className="uppercase text-center">
        <div>{tracks[props.idx].artist}</div>
        <div>{tracks[props.idx].name}</div>
      </div>
		</>
	);
}

export const Progress = (props:any) => {
  let [currLength, setCurrLength] = useState<number>(0)
	let [length, setLength] = useState<number>(0)
	let options = useContext(userOptions)
	const progressBar = document.querySelector(`.progressBar`) as HTMLDivElement
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
        <div className="progressBar" >
				</div>
			</div>
			<div className="songLength">
				<p>{formatTime(length)}</p>
			</div>
		</div>
	);
}

export const Control = (props:any) => {
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
