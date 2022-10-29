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
import et_player_thumb from "@images/et_how_to_player.png";
import downArrow from "@images/arrovw_down.svg";
import { useTezosCollectStore } from "store";
gsap.registerPlugin(ScrollTrigger)

const Dashboard = (): JSX.Element => {
  const { activeAddress } = useTezosCollectStore();
  const navbarMenu = [
    {
      player: "mechanism",
      imageUrl: "https://ipfs.io/ipfs/QmSqWNSGuPCfZQ8uJwhi94aXZDXRDbP5a75MtR7YBgDYDS/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781874&viewer=",
      square: 'https://i.postimg.cc/7ZtqTshG/square-download-mechanism.jpg',
      unlockable: 'https://i.postimg.cc/1XKQRMbz/unlockable-download-mechanism.png',
      tokendId: 781874,
    },
    {
      player: "burnt",
      imageUrl: "https://ipfs.io/ipfs/QmTvcnqnBjcjMQ1gDoG5jSvap7id7t2nhvQLmLiCRqSFqq/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
      square: 'https://i.postimg.cc/9M55GvhM/square-burnt.jpg',
      unlockable: 'https://i.postimg.cc/9Md31JmB/unlockable-burnt.png',
      tokendId: 781875,
      titleHardCode:"'BURNT'",
      artist:"Producer: BAI-EE"
    },
    {
      player: "alpha-test",
      imageUrl: "https://ipfs.io/ipfs/QmYRBDjBixJczcXs6fNunG9EGPsHqQT62ifEBzYTS1SjGe/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
      square: 'https://i.postimg.cc/rFHCppZT/square-alpha-test.jpg',
      unlockable: 'https://i.postimg.cc/MTyqnXmF/unlockable-alpha-test.png',
      tokendId: 612561,
      titleHardCode:"'ACID BEACH'",
      artist:"Producer: BAI-EE",
      origEdit: 'https://i.postimg.cc/rFHCppZT/original.png',
      lokt_612561:lockt_612561,
      player_thumbnail: et_player_thumb
      
      // loopPlay: 'https://i.postimg.cc/rFHCppZT/loop_play.png',
      // editLoop: 'https://i.postimg.cc/rFHCppZT/edit_loop.png',
      // masterPlay: 'https://i.postimg.cc/rFHCppZT/master_play.png',
      // lock: 'https://i.postimg.cc/rFHCppZT/lock.png'
    },
    {
      player: "dapp",
      imageUrl: "https://hic-af.infura-ipfs.io/ipfs/QmSHtBDT86HBpZTpTGbbEUVQcjGzmrQyW2RbNaXTTqDxYu?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
      square: 'https://i.postimg.cc/QdwR3RVb/square-boxxed.jpg',
      unlockable: 'https://i.postimg.cc/d3sf6FSq/unlockable-boxxed.png',
      tokendId: 612561,
    }
  ];
  const [isload, setIsload] = useState<boolean>(true)
  const [result, setResult] = useState<any>()
  const [metaData, setMetaData] = useState<any>()
  const param = useParams();
  useEffect(()=>{
    const searchResult = navbarMenu.find(item => item.player == param.id)
    setResult(searchResult)
    console.log("searchResult", searchResult)
    fetchMetadata(searchResult?.tokendId);
    setIsload(false);
  }, [param])

  const fetchMetadata =async (_tokenId:number | undefined) => {
    const res = await axios.get(`https://api.tzkt.io/v1/tokens?tokenId=${_tokenId}&contract=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton`)
    console.log("res.data[0]", res.data[0])
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

  const [show, setShow] = useState(false)
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
              <button className="font-mathias sm:bg-black sm:rounded sm:text-yellow-75 px-2 sm:font-bold sm:py-2 sm:w-40 hover:text-gray-300 text-md" onClick={()=>
                setShow(true)}>Unlock
              </button>
              <Modal onClose = {() => setShow(false)} show={show}/>
                <div className="hidden">
                  {active? <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={()=>
                  handleDisconnect()}>{`${account?.slice(0, -36)}...${account?.substring(38)}`}</button>: 
                    <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={()=>{
                      handleConnectMetaMask()
                    }}>Etereum</button>
                  }
                </div>
                {/* <ConnectButton 
                  Tezos={Tezos}
                  setContract={setContract}
                  setWallet={setWallet}
                  setUserAddress={setUserAddress}
                  setUserBalance={setUserBalance}
                  setStorage={setStorage}
                  userAddress={userAddress}
                  beaconConnection={beaconConnection}
                  setBeaconConnection={setBeaconConnection}
                  wallet={wallet}
                /> */}
              </div>
            </div>
            <div className="mx-4 md:mx-0 h-iframeLoad">
            <iframe src={`${result?.imageUrl}${activeAddress}`} className="w-full h-iframe" ref={Iframe}/>
            </div>
            <div className="bg-yellow-75 flex justify-center py-2 md:py-8 mx-4 md:mx-0 max-w-full">
              {/* <button className="font-mathias text-md bg-black text-yellow-75 font-bold rounded px-16 md:px-64 sm:py-4"> */}
              <img src={downArrow} alt="logo" id="logo_test" className="w-6 sm:w-10" ref={dwnArrow}/>
              {/* </button> */}
            </div>
          </div>
          <section className="text-yellow-75 grid grid-cols-2 md:grid-cols-4 gap-4 font-mathias mb-16 mt-10 -sm:mt-8 ">
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">10</div>
              <div>Floor Price (Tez)</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{metaData?.totalSupply}</div>
              <div>Sold</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{metaData?.totalMinted}</div>
              <div>Minted</div>
            </div>
            <div className="text-center space-y-0 font-bold">
              <div className="text-7xl">{metaData?.holdersCount}</div>
              <div>Collectors</div>
            </div>
          </section>
          <Content 
          player_thumbnail={result?.player_thumbnail} 
            lokt_612561={result?.lokt_612561} 
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
