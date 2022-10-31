

import { Link } from "react-router-dom";
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
import thumb from "@images/thumbnail.jpg";
import all_markets from "@images/all_markets.png";
import all_devices from "@images/all_devices.png";
import { scrollTop } from "utils/scroll";
import player_thumbnail from "@images/et01_instructions.png";
import howToImage from "../Modal/image_popup_howTo";
import et01_head from "@images/square_alpha_test.png";
import AudioPlayer from 'react-h5-audio-player'; // import react audio module 
import 'react-h5-audio-player/lib/styles.css'; //css of it
// import Marketplaces from "../Modal/Marketplaces";
import { disableScroll, enableScroll } from "utils/scroll";
import et03 from "../assets/square_download_mechanism.png";
import et02 from "../assets/square_boxxed.png";
import et01 from "../assets/square_burnt.png";
import et00 from "../assets/square_alpha_test.png";
import DropDown from "../components/DropDown";
import Collapsible from 'react-collapsible';

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

  <section className="bg-yellow-75 flex flex-col items-center gap-0 px-2 py-5 mb-0 mx- md:mb-0 md:pb-0 md:mx-0 order-last" >
              
    <div className="flex flex-col items-center gap-0 md:flex-row md:gap-8 mb-0">
      <img src={et01_head} alt="rotating head" className="w-md max-w-xs rounded-md shadow-2xl"/>
      <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
        <div className="font-mathias text-7xl font-extrabold mt-8 text-center">{props.titleHardCode}</div>
        <div className="font-mathias text-2xl mt-0 text-4xl text-black text-center" >{props.artist}</div>
        <div className="mt-0 flex flex-wrap mb-0 sm:mb-0 pt-0 justify-center h-auto">
        <div className="mt-2 flex flex-wrap mb-0 sm:mb-2 pt-0 justify-center h-auto">
        { 
        props.keyValue?.map((item, i)=>
          <button className="rounded-3xl flex content-center text-yellow-75 px-2 py-1 text-xxs gap-y-1 ml-1 mt-1 mt-0 outline_button uppercase" key={i}>{item}</button>
          )
        }
      </div>
    
   
        </div>

      </div>



    </div>
        
    <div className="bg-lightblue py-4 px-0 mb-0">
      <div className="mx-auto max-w-6xl gap-0 sm:gap-16 flex flex-col md:flex-row sm:mt-10">
        <dl className="w-full md:w-2/3">


        <Collapsible className="outline_button_meta bg-yellow-75 text-center w-34 mt-14 text-black rounded-md mb-4 shadow-2xl" trigger="Metadata">



      {/* <blockquote className="p-4 my-0 bg-yellow-75 border-l-4 border-black dark:border-gray-500 dark:bg-gray-800"> */}
 {/* <div className="font-mathias w-52 mt-2">    
   <a href="https://objkt.com/asset/hicetnunc/612561" className="text-left px-0 py-0 text-black rounded-md hover:opacity-50 text-lg">
   OBJKT #{props.tokendId}
   </a>
 </div> */}

 <div className="font-mathias mt-8 ">          
   <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
   Contract on Tkz
   </a>
 </div>
 
 <div className="font-mathias mt-6">
   <a href="https://objkt.com/asset/hicetnunc/612561" className="bg-black text-center px-4 py-2 text-yellow-75 rounded-md hover:opacity-50">
   Creative on IPFS
   </a>       
 </div>

 <div className="font-mathias mt-2 mb-2 text-lg mt-10 text-left">Description</div>

 <p className="text-justify">
 {props.description}
 </p>

 <h2 className="text-justify font-mathias mr-0 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
     Collector Rights
   </h2>
     <p className="text-justify mb-6">
         Owners of OBJKT #{props.tokendId} are allowed to create, download and dj edits of its contained track "BURNT". Collectors are not allowed to repackage edits for sale or distribution. Assume no other rights
     </p> 

 
 {/* </blockquote> */}






    </Collapsible>





        <div className="bg-transparent mx-0 rounded-lg mb-4 w-auto rounded-sm px-0 mt-4 px-0 lg:mt-8 mt-24">  
      
      
      
      {/* Players */}
      {/* <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12"> */}
      <div className="grid grid-cols-1 gap-2 mx-0 max-w-screen-xl hover:scale-75 h-auto">

      {/* Player 1 */}

      <div className="mb-0 bg-black lg:mb-0 rounded-xl border-5 px-2 border-yellow-75 shadow-2xl">
      {/* <div className="bg-white block rounded-lg shadow-lg">  */}
        <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
          {/* <img alt="icon0" className="w-full h-auto"/> */}
          <img src={et00} alt="icon1" className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"/>

          <div className="flex-row flex m-0 w-96 justify-around md:mt-0">
          <div className="text-left w-auto pl-2 player_name">
            <div>{musicTracks[0].trackName}</div>
            <div>{musicTracks[0].artistName}</div>
            <div className="text-xxs">Acid Techno</div>
          </div>
          <div className="border-0 align-middle border-black bg-yellow-75 text-black shadow-4xl leading-3 rounded-md px-1 py-1 mt-auto mb-auto hover:text-gray-300">
            <Link to="/edit-trax/burnt">
              <button className="uppercase leading-tight h-8 mt-auto text-sm" onClick={()=>scrollTop()}>
              EDIT<br></br>TRACK
              </button>
            </Link>
          </div>
          <AudioPlayer 
            autoPlay
            style={{ backgroundColor:"#ffffff" }} // media player background color 
            src={musicTracks[1].src} // media source
            showJumpControls={false} // Jump control remove
            showFilledProgress={false} // show filled process color
            customVolumeControls={[]} // Volume control remove
            customAdditionalControls={[]} // addition control remove
          />
          </div>
        </div>
        {/* </div> */}
        </div>

        <div className="mb-0 bg-black lg:mb-0 rounded-xl border-5 px-2 border-yellow-75 shadow-2xl">
      {/* <div className="bg-white block rounded-lg shadow-lg">  */}
        <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
          {/* <img alt="icon0" className="w-full h-auto"/> */}
          <img src={et03} alt="icon1" className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"/>

          <div className="flex-row flex m-0 w-96 justify-around md:mt-0">
          <div className="text-left w-auto pl-2 player_name">
            <div>{musicTracks[1].trackName}</div>
            <div>{musicTracks[1].artistName}</div>
            <div className="text-xxs">Acid Techno</div>
          </div>
          <div className="border-0 border-black bg-yellow-75 text-black shadow-4xl leading-3 rounded-md px-1 py-1 mt-auto mb-auto hover:text-gray-300">
            <Link to="/edit-trax/burnt">
              <button className="uppercase leading-tight h-8 mt-auto text-sm" onClick={()=>scrollTop()}>
              EDIT<br></br>TRACK
              </button>
            </Link>
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
          </div>
        </div>
        {/* </div> */}
        </div>

        <div className="mb-0 bg-black lg:mb-0 rounded-xl border-5 px-2 border-yellow-75 shadow-2xl">
      {/* <div className="bg-white block rounded-lg shadow-lg">  */}
        <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
          {/* <img alt="icon0" className="w-full h-auto"/> */}
          <img src={et01} alt="icon1" className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"/>

          <div className="flex-row flex m-0 w-96 justify-around md:mt-0">
          <div className="text-left w-auto pl-2 player_name">
            <div>{musicTracks[1].trackName}</div>
            <div>{musicTracks[1].artistName}</div>
            <div className="text-xxs">Acid Techno</div>
          </div>
          <div className="border-0 border-black bg-yellow-75 text-black shadow-4xl leading-3 rounded-md px-1 py-1 mt-auto mb-auto hover:text-gray-300">
            <Link to="/edit-trax/burnt">
              <button className="uppercase leading-tight h-8 mt-auto text-sm" onClick={()=>scrollTop()}>
              EDIT<br></br>TRACK
              </button>
            </Link>
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
          </div>
        </div>
        {/* </div> */}
        </div>

        <div className="mb-0 bg-black lg:mb-0 rounded-xl border-5 px-2 border-yellow-75 shadow-2xl">
      {/* <div className="bg-white block rounded-lg shadow-lg">  */}
        <div className="text-yellow-75 h-24 sm:h-28 border-0 border-yellow-75 flex flex-row rounded-lg items-center font-mathias justify-evenly py-0 px-0 md:p-4 bg-transparent player1">
          {/* <img alt="icon0" className="w-full h-auto"/> */}
          <img src={et02} alt="icon1" className="w-20 p-0 ml-1 sm:ml-10 md:ml-0 shadow-2xl rounded-md"/>

          <div className="flex-row flex m-0 w-96 justify-around md:mt-0">
          <div className="text-left w-auto pl-2 player_name">
            <div>{musicTracks[1].trackName}</div>
            <div>{musicTracks[1].artistName}</div>
            <div className="text-xxs">Acid Techno</div>
          </div>
          <div className="border-0 border-black bg-yellow-75 text-black shadow-4xl leading-3 rounded-md px-1 py-1 mt-auto mb-auto hover:text-gray-300">
            <Link to="/edit-trax/burnt">
              <button className="uppercase leading-tight h-8 mt-auto text-sm" onClick={()=>scrollTop()}>
              EDIT<br></br>TRACK
              </button>
            </Link>
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






          <dd className="mb-8">

           
          </dd>
        </dl> 
    
        <dl className="w-full md:w-2/3 ">

        <h2 className="font-mathias mb-4 mt-6 md:mt-0 w-full text-lg sm:text-lg lg:text-xl xl:text-3xl font-extrabold align-middle">
          {/* Metadata */}
          <br></br>
        </h2>


          <h2 className="font-mathias md:mt-0 w-full text-3xl sm:text-2xl w-full lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0 ">
            <button className="outline_button_main bg-yellow-75 w-full text-center w-34 py-4 px-11 mt-0 text-black rounded-md mb-4 shadow-2xl" onClick={()=> {scrollTop();}}>
            Edit The Track
            </button>

          </h2>

          <h2 className="font-mathias align-middle flex content-center col mt-4 sm:mt-6 md:mt-0 text-3xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold mb-4">
          {/* <Marketplaces onClose = {() => {setShow(false); enableScroll()}} show={show}/> */}
          
            <button className="bg-red-900 w-34 text-center py-4 w-full px-6 text-yellow-75 rounded-md  hover:opacity-50 shadow-2xl mb-0" onClick={()=> {setShow(true); disableScroll();}}>
              Collect  On Tezos
            </button>

          </h2>

          <h2 className="font-mathias mt-4 w-full text-3xl sm:text-2xl lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0">
            <button className="bg-orange-900 w-34 text-center w-full py-4 px-4 mt-0 text-yellow-75 rounded-md hover:opacity-50 mb-4  shadow-2xl" onClick={()=> {setShow(true); disableScroll();}}>
            Connect & Download
            </button>
            &nbsp;<br></br> 
          </h2>

          <Modal onClose = {() => {setShow(false); enableScroll()}} show={show}/>





        {/* <DropDown/> */}


         
















       


    
        <dd className="mb-8">


          
        </dd>
      </dl>

      
    </div>




        
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
            <h2 className=" mr-0 mb-0 mt-6 md:mt-0 text-center w-full text-sm sm:text-lg lg:text-xl xl:text-3xl align-middle">
        EditTrax provides the best UX
            </h2>
        
                   
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
          

    </div>
  
</section>

);
};

export default Content;
