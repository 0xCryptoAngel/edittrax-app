import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import et_new_logo from '../assets/et_new_logo.png'
import { useParams } from "react-router-dom";

import load from '../assets/load.gif'
import square_download_mechanism from '../assets/square_download_mechanism.jpg'
import unlockable_download_mechanism from "../assets/unlockable_download_mechanism.png";




import Footer from "../components/Footer";
import Miscellaneous from "../components/miscellaneous";
import Collection from "../components/Collection";

type WalletProps = {
  Tezos: TezosToolkit;
  setContract: Dispatch<SetStateAction<any>>;
  setWallet: Dispatch<SetStateAction<any>>;
  userAddress: string;
  beaconConnection: boolean;
  setStorage: Dispatch<SetStateAction<any>>;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setUserBalance: Dispatch<SetStateAction<number>>;
  setBeaconConnection: Dispatch<SetStateAction<boolean>>;
  wallet: BeaconWallet;
};


//ADD OBJCTS IPFS ADDY + CREATOR ADDY & OBJKT# 
const navbarMenu = [
  {
    player: "mechanism",
    imageUrl: "https://ipfs.io/ipfs/QmSqWNSGuPCfZQ8uJwhi94aXZDXRDbP5a75MtR7YBgDYDS/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781874&viewer=",
  },
  {
    player: "burnt",
    imageUrl: "https://ipfs.io/ipfs/QmTvcnqnBjcjMQ1gDoG5jSvap7id7t2nhvQLmLiCRqSFqq/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
  },
  {
    player: "alpha-test",
    imageUrl: "https://ipfs.io/ipfs/QmYRBDjBixJczcXs6fNunG9EGPsHqQT62ifEBzYTS1SjGe/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
  },
  {
    player: "dapp",
    imageUrl: "https://hic-af.infura-ipfs.io/ipfs/QmSHtBDT86HBpZTpTGbbEUVQcjGzmrQyW2RbNaXTTqDxYu?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
  }
];

const Dashboard = ({
  Tezos,
  setContract,
  setWallet,
  setUserAddress,
  setStorage,
  userAddress,
  beaconConnection,
  setUserBalance,
  setBeaconConnection,
  wallet
}: WalletProps): JSX.Element => {
  const [isload, setIsload] = useState(true)
  const param = useParams();
  const result = navbarMenu.find(item => item.player == param.id)
  useEffect(()=>{
    console.log("-------------")
    setTimeout(async ()=>{
      console.log("Delayed for 1 second.");
      setIsload(false);
    }, 1000)
  }, [])
  return (
    <div className="bg-black">
      {isload? 
        <img src={load} alt="load" className="loading" />:
    <div className="max-w-5xl mx-auto  py-12">
      <div className="h-screen">
        <div className="bg-white py-2 flex items-center px-12 justify-between mx-4 md:mx-0">
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-10 text-white">
            <img src={et_new_logo} alt="logo" className="w-16 h-10"/>
            </ul>
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
        <iframe src={`${result?.imageUrl}${userAddress}`} className="w-full h-iframe mx-4 md:mx-0"/>
        <div className="bg-white flex justify-center py-4 mx-4 md:mx-0">
          <button className="bg-black text-white font-bold rounded px-8 py-2">Collect</button>
        </div>
      </div>
      <section className="text-white grid grid-cols-2 md:grid-cols-4 gap-4 font-mathias mb-16">
        <div className="text-center space-y-3 font-bold">
          <div className="text-5xl">1.5</div>
          <div>PRICE</div>
        </div>
        <div className="text-center space-y-3 font-bold">
          <div className="text-5xl">75</div>
          <div>EDITIONS</div>
        </div>
        <div className="text-center space-y-3 font-bold">
          <div className="text-5xl">55</div>
          <div>COLLECTORS</div>
        </div>
        <div className="text-center space-y-3 font-bold">
          <div className="text-5xl">112</div>
          <div>VOLUME</div>
        </div>
      </section>
      <section className="bg-white flex flex-col  items-center gap-8 px-8 py-12 mb-4 mx-4 md:mb-0 md:pb-0 md:mx-0">
        <div className="flex flex-col items-center gap-8 md:flex-row md:w-full md:gap-8 md:items-end">
          <img src={square_download_mechanism} alt="rotating head" className="w-52"/>
          <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
            <div className="font-mathias text-5xl font-bold">BAI-EE</div>
            <div className="font-mathias text-5xl font-bold text-gray-300">"ACID BEACH"</div>
            <div className="space-x-4 pt-6">
              <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs">DOWNLOAD</button>
              <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs">OPENSOURCE</button>
              <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs">INTERACTIVE</button>
              <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs">MUSIC</button>
              <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs">STREAM</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="font-mathias text-xs text-center space-y-4 md:text-left">
            <h2 className="w-52 mx-auto">MINTED 7/23/2022</h2>
            <div className="w-52 mx-auto"><a href="#" className="border-b border-black">LINK TO IPFS</a></div>
            <div className="w-52 mx-auto"><a href="#" className="border-b border-black">CONTACT ADDRESS</a></div>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="font-mathias text-center">DESCRIPTION</h1>
              <p>Bai-ee's "Acid Beach" (ET001) is a Detroit influenced House track set to 808 drums, 303 bassline and modular driven synth. Released as a full featured (ALPHA) test this interactive music collectible features an integrated looper and token gated download mechanism.</p>
            </div>
            <img src={unlockable_download_mechanism} alt="edittrax process"/>
            <div>
              <h1 className="font-mathias text-center">RIGHTS</h1>
              <p>As the owner of this collectible, you are granted the right to perform its downloadable content in public. This includes playing in mix-tapes, online streams, social feeds, and live performances. You do NOT have the right to repackage downloaded content for resale or distribution. Assume NO other rights of ownership.</p>
            </div>
          </div>
        </div>
      </section>
      <Collection/>
      <Miscellaneous/>
      <Footer/>
    </div>
      }
    </div>
  );
};

export default Dashboard;
