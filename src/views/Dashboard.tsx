import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import et_new_logo from "../assets/et_new_logo.png";
import { useParams } from "react-router-dom";

import load from "../assets/load.gif";

import square_download_mechanism from "../assets/square_download_mechanism.png";
import square_boxxed from "../assets/square_boxxed.png";
import square_burnt from "../assets/square_burnt.png";
import square_alpha_test from "../assets/square_alpha_test.png";

import unlockable_burnt from "../assets/unlockable_burnt.png";
import unlockable_boxxed from "../assets/unlockable_boxxed.png";
import unlockable_alpha_test from "../assets/unlockable_alpha_test.png";
import unlockable_download_mechanism from "../assets/unlockable_download_mechanism.png";


import Content from "../components/Content";
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
    square: square_download_mechanism,
    unlockable: unlockable_download_mechanism,
    title: 'acid beach (editteraxdug)'
  },
  {
    player: "burnt",
    imageUrl: "https://ipfs.io/ipfs/QmTvcnqnBjcjMQ1gDoG5jSvap7id7t2nhvQLmLiCRqSFqq/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
    square: square_burnt,
    unlockable: unlockable_burnt,
    title: 'burnt',
  },
  {
    player: "alpha-test",
    imageUrl: "https://ipfs.io/ipfs/QmYRBDjBixJczcXs6fNunG9EGPsHqQT62ifEBzYTS1SjGe/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
    square: square_alpha_test,
    unlockable: unlockable_alpha_test,
    title: 'acid beach'
  },
  {
    player: "dapp",
    imageUrl: "https://hic-af.infura-ipfs.io/ipfs/QmSHtBDT86HBpZTpTGbbEUVQcjGzmrQyW2RbNaXTTqDxYu?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=",
    square: square_boxxed,
    unlockable: unlockable_boxxed,
    title: 'boxxed'
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
    setTimeout(async ()=>{
      console.log("Delayed for 1 second.");
      setIsload(false);
    }, 1000)
  }, [])
  return (
    <div className="bg-black">
      {isload? 
      <div className="w-full h-screen flex justify-center items-center">
        <img src={load} alt="load" className="w-80 h-80"/>
      </div>:
        <div className="max-w-5xl mx-auto  py-12">
          <div className="h-screen">
            <div className="bg-white py-2 flex items-center px-12 justify-between mx-4 md:mx-0">
              <div className="flex items-center space-x-8">
                <ul className="flex space-x-10 text-white">
                <img src={et_new_logo} alt="logo" className="w-16 h-10"/>
                </ul>
              </div>
              <ConnectButton
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
              />
            </div>
            <div className="mx-4 md:mx-0">
              <iframe src={`${result?.imageUrl}${userAddress}`} className="w-full h-iframe "/>
            </div>
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
          <Content square={result?.square} unlockable={result?.unlockable} title={result?.title}/>
          <Collection/>
          <Miscellaneous/>
          <Footer/>
        </div>
      }
    </div>
  );
};

export default Dashboard;
