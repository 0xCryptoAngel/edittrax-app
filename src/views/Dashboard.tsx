import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import et_new_logo from "@images/et_new_logo.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Miscellaneous from "../components/miscellaneous";
import Collection from "../components/Collection";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { MetaMaskconnector } from '../wallet/wallet'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Modal from "../Modal/Modal";
import lockt_612561 from "@images/et001_loct.jpg";
import et_player_thumb from "@images/et01_instructions.png";
import et01_thumb from "@images/et001_thumbnail.jpg";
import et02_thumb from "@images/et002_thumbnail.jpg";
import et03_thumb from "@images/et003_thumbnail.jpg";
import et04_thumb from "@images/et004_thumbnail.jpg";
import et01_release from "@images/square_alpha_test.png";
import et02_release from "@images/et02_releaseart.jpg";
import et03_release from "@images/et03_releaseart.jpg";
import et04_release from "@images/et04_releaseart.jpg";
import et2_player_thumb from "../assets/et2_player.png";
import { scrollTop } from "utils/scroll";

import downArrow from "@images/arrovw_down.svg";
import { useTezosCollectStore } from "store";
import { disableScroll, enableScroll } from "utils/scroll";
gsap.registerPlugin(ScrollTrigger)

const Dashboard = (): JSX.Element => {
  const { activeAddress } = useTezosCollectStore();
  const navbarMenu = [
    {
      player: "et004",
      imageUrl: "https://et004.on.fleek.co/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=792753&viewer=",
      square: 'https://i.postimg.cc/7ZtqTshG/square-download-mechanism.jpg',
      unlockable: 'https://i.postimg.cc/1XKQRMbz/unlockable-download-mechanism.png',
      tokendId: 792753,
      titleHardCode:"'No Mills'",
      artist:"BAI-EE",
      origEdit: 'https://i.postimg.cc/rFHCppZT/original.png',
      lokt_612561:lockt_612561,
      player_thumbnail: et04_thumb,
      release_art:et04_release,
      mint_price:"4",
      floor_price:"4",
      collect_url:"https://objkt.com/asset/hicetnunc/792753",
      metadata_url:"https://cloudflare-ipfs.com/ipfs/QmT3EBYug1yYST2NKgv1bMAYM91qjpCyDDjjGP4kge79YY",
      creative_url:"https://cloudflare-ipfs.com/ipfs/QmUeU4Wgsv9Hoh7Uyfys23TTZnHQyZYTfBxESkzQ5sjbyp"
    },
    {
      player: "et002", 
      imageUrl: "https://et002.on.fleek.co/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=792752&viewer=",
      // imageUrl: "https://ipfs.io/ipfs/QmTvcnqnBjcjMQ1gDoG5jSvap7id7t2nhvQLmLiCRqSFqq/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
      square: 'https://i.postimg.cc/9M55GvhM/square-burnt.jpg',
      unlockable: 'https://i.postimg.cc/9Md31JmB/unlockable-burnt.png',
      tokendId: 792752,
      titleHardCode:"'BURNT'",
      artist:"BAI-EE",
      origEdit: 'https://i.postimg.cc/rFHCppZT/original.png',
      lokt_612561:lockt_612561,
      player_thumbnail: et02_thumb,
      release_art:et02_release,
      mint_price:"X",
      floor_price:"X",
      collect_url:"https://objkt.com/asset/hicetnunc/792752",
      metadata_url:"https://cloudflare-ipfs.com/ipfs/QmSGaV4SmMMmVTaetk9DwvM3YH5tMp4GmmEbqz2JLTYV3K",
      creative_url:"https://cloudflare-ipfs.com/ipfs/QmWXaD6JbX3wxgJtDGGZqVG8sksPqn5D9d1rSfBP4wMFk7/"
    },
    {
      player: "et001",
      imageUrl: "https://et001.on.fleek.co/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
      square: 'https://i.postimg.cc/rFHCppZT/square-alpha-test.jpg',
      unlockable: 'https://i.postimg.cc/MTyqnXmF/unlockable-alpha-test.png',
      tokendId: 612561,
      titleHardCode:"'ACID BEACH'",
      artist:"BAI-EE",
      origEdit: 'https://i.postimg.cc/rFHCppZT/original.png',
      lokt_612561:lockt_612561,
      player_thumbnail: et01_thumb,
      release_art:et01_release,
      mint_price:"1.5",
      floor_price:"10",
      collect_url:"https://objkt.com/asset/hicetnunc/612561",
      metadata_url:"",
      creative_url:""
      
      // loopPlay: 'https://i.postimg.cc/rFHCppZT/loop_play.png',
      // editLoop: 'https://i.postimg.cc/rFHCppZT/edit_loop.png',
      // masterPlay: 'https://i.postimg.cc/rFHCppZT/master_play.png',
      // lock: 'https://i.postimg.cc/rFHCppZT/lock.png'
    },
    {
      player: "et003",
      imageUrl: "https://et003.on.fleek.co/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=792748&viewer=",
      square: 'https://i.postimg.cc/QdwR3RVb/square-boxxed.jpg',
      unlockable: 'https://i.postimg.cc/d3sf6FSq/unlockable-boxxed.png',
      tokendId: 792748,
      titleHardCode:"'Boxxed'",
      artist:"BAI-EE",
      origEdit: 'https://i.postimg.cc/rFHCppZT/original.png',
      lokt_612561:lockt_612561,
      player_thumbnail: et03_thumb,
      release_art:et03_release,
      mint_price:"X",
      floor_price:"10",
      collect_url:"https://objkt.com/asset/hicetnunc/792748",
      metadata_url:"https://cloudflare-ipfs.com/ipfs/QmZ1b4WKThayRbSsja75dBpVkXDmVxzEpmhFsF69SPAH49",
      creative_url:"https://cloudflare-ipfs.com/ipfs/QmYQzipzWR5FPsdK3fn9ShbDCqoMz5mjRFfBVPU53f4wMd/"
    }
  ];
  const [isload, setIsload] = useState<boolean>(true)
  const [result, setResult] = useState<any>()
  const [metaData, setMetaData] = useState<any>()
  const param = useParams();
  useEffect(()=>{
    const searchResult = navbarMenu.find(item => item.player == param.id)
    setResult(searchResult)
    // console.log("searchResult", searchResult)
    fetchMetadata(searchResult?.tokendId);
    setIsload(false);
  }, [param])

  const fetchMetadata =async (_tokenId:number | undefined) => {
    const res = await axios.get(`https://api.tzkt.io/v1/tokens?tokenId=${_tokenId}&contract=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton`)
    // console.log("res.data[0]", res.data[0])
    setMetaData(res.data[0])
  }

  const { active, activate, deactivate, account, error } = useWeb3React()

  const dashboard = useRef(null);
  const loader = useRef(null);
  const scroll = useRef(null);
  const loaderIframe = useRef(null);
  const Iframe = useRef(null);
  const dwnArrow = useRef(null);

  useEffect(() => {

    if (active) {
      localStorage.setItem('shouldEagerConnect', true.toString())
    }

    const db = dashboard.current;
    const ld = loader.current;
    const srl = scroll.current;
    const loa = loaderIframe.current;
    const Ifr = Iframe.current;
    const dArrow = dwnArrow.current

    //WITH Timelines (cleaner, more versatile)
    let tlMain = gsap.timeline({repeat: 0, repeatDelay: 0});
    tlMain.fromTo(ld, {opacity:1}, {opacity:0, height:0, y:-5000, delay:1.25, duration:.025});
    tlMain.fromTo(db, {opacity:0, y:20}, {opacity:1, y:0, duration:.25});
    tlMain.fromTo(dArrow, {opacity:0, y:-20}, {opacity:1, y:0, duration:.25});

    // tlMain.fromTo(loa, {opacity:1}, {opacity:0, delay:1, duration:.25});
    tlMain.fromTo(Ifr, {opacity:0}, {opacity:1, duration:.25});

    gsap.fromTo(srl, {opacity:1, y:25}, {opacity:1, y:0, duration:.75,
      scrollTrigger: {
        trigger:srl,
        scrub: 2,
      }
    });
  }, [active])
  const handleConnectMetaMask = useCallback(() => {
    activate(MetaMaskconnector)
  }, [activate])

  const handleDisconnect = () => {
    deactivate()
    localStorage.removeItem('shouldEagerConnect')
    window.location.reload()
  }

  const [show, setShow] = useState<boolean>(false)
  return (
    
    <div className="bg-black">
      <div className="w-full h-screen flex justify-center items-center" ref={loader}>
        <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className="w-80 h-80"/>
      </div>
      <div className="md:px-4 mx-auto py-4" ref={dashboard}>
          <div className="h-screen">
            <div className="bg-yellow-75 rounded-t-lg py-2 md:py-6 flex items-center px-4 justify-between mx-4 md:mx-0">
              <div className="flex items-center space-x-8">
                <ul className="flex space-x-10 text-bg-yellow-75">
                <img src={et_new_logo} alt="logo" id="logo_test" className="w-6 sm:w-10"/>
                </ul>
              </div>
              <div className="flex gap-4 items-center">
              <button className="font-mathias sm:bg-black sm:rounded sm:text-yellow-75 px-2 sm:font-bold sm:py-2 sm:w-40 hover:text-gray-300 text-md hover:opacity-50" onClick={()=> {setShow(true); disableScroll();}}>DOWNLOAD
              </button>
              <Modal onClose = {() => {setShow(false); enableScroll()}} show={show}/>
                <div className="hidden">
                  {active? <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={()=>
                  handleDisconnect()}>{`${account?.slice(0, -36)}...${account?.substring(38)}`}</button>: 
                    <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={()=>{
                      handleConnectMetaMask()
                    }}>Etereum</button>
                  }
                </div>
              </div>
            </div>
            <div className="mx-4 md:mx-0 h-iframeLoad">
            <iframe src={`${result?.imageUrl}${activeAddress}`} className="w-full h-iframe" ref={Iframe}/>
            </div>
            <div className="bg-yellow-75 flex justify-center py-3 md:py-8 mx-4 md:mx-0 max-w-full font-bold text-lg" ref={dwnArrow}>
              {/* <button className="font-mathias text-md bg-black text-yellow-75 font-bold rounded px-16 md:px-64 sm:py-4"> */}
              ••• 
              {/* <img src={downArrow} alt="logo" id="logo_test" className="w-3" ref={dwnArrow}/> */}
              {/* </button> */}
            </div>
          </div>
          <section className="text-yellow-75 grid grid-cols-2 md:grid-cols-4 gap-4 font-mathias mb-16 -mt-36 sm:-mt-24 pt-24 md:-mt-10 lg:-mt-10">
            
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{result?.mint_price}</div>
              <div>Tez</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{metaData?.totalMinted}</div>
              <div>Editions</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{result?.floor_price}</div>
              <div>Floor</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{metaData?.holdersCount}</div>
              <div>Collectors</div>
            </div>
          </section>
          <Content 
            release_art={result?.release_art} 
            player_thumbnail={result?.player_thumbnail} 
            lokt_612561={result?.lokt_612561} 
            creative_url={result?.collect_url} 
            metadata_url={result?.collect_url} 
            collect_url={result?.collect_url} 
            floor_price={result?.mint_price} 
            mint_price={result?.mint_price} 
            tokendId={result?.tokendId} 
            artist={result?.artist} 
            titleHardCode={result?.titleHardCode} 
            square={result?.square} 
            unlockable={result?.unlockable} 
            title={metaData?.metadata.name} 
            keyValue={metaData?.metadata?.tags}
            description={metaData?.metadata?.description}
            mintedDate={new Date(metaData?.firstTime).toLocaleDateString()}
            ipfs={metaData?.metadata?.artifactUri?.replace(":/", "")}
            address={metaData?.contract?.address}
            // origEdit={result?.origEdit} 
            // origEdit={result?.origEdit} 
            // loopPlay={result?.loopPlay} 
            // editLoop={result?.editLoop} 
            // masterPlay={result?.masterPlay} 
            // lock={result?.lock}
          />
          <Collection/>
          <Miscellaneous/>
          <Footer/>
        </div>
      {/* } */}
    </div>
  );
};

export default Dashboard;
