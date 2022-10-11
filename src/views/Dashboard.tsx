import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import et_new_logo from '../assets/et_new_logo.png'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import load from '../assets/load.gif'
import square_download_mechanism from '../assets/square_download_mechanism.jpg'
import unlockable_download_mechanism from "../assets/unlockable_download_mechanism.png";

//IMPORT THUMBNAIL IMAGES FOR ADDITIONAL PLAYERS
import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';
import square_alpha_test from '../assets/animation/square_alpha_test.jpg';

import Footer from "../components/Footer";

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
        <div className="bg-white py-2 flex items-center px-12 justify-between">
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
        <iframe src={`${result?.imageUrl}${userAddress}`} className="w-full h-iframe"/>
        <div className="bg-white flex justify-center py-4">
          <button className="bg-black text-white font-bold rounded px-8 py-2">Collect</button>
        </div>
      </div>
      <section className="text-white grid grid-cols-4 gap-4">
        <div className="text-center space-y-3 font-bold">
          <div className="text-5xl">1.5</div>
          <div>TEZ</div>
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
      <section className="bg-white flex justify-between gap-4 px-8 pt-12 ">
        <div className="info">
          <div className="graphix">
            <img src={square_download_mechanism} alt="rotating head"/>
          </div>
          <div className="bai-info">
            <div><h1>BAI-EE</h1></div>
            <div><p>"ACID BEACH"</p></div>
            <div>
              <button>DOWNLOAD</button>
              <button>OPENSOURCE</button>
              <button>INTERACTIVE</button>
              <button>MUSIC</button>
              <button>STREAM</button>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="details">
            <h2>MINTED 7/23/2022</h2>
            <span><a href="#">LINK TO IPFS</a></span>
            <span><a href="#">CONTACT ADDRESS</a></span>
          </div>
          <div className="description-info">
            <div>
              <h1>DESCRIPTION</h1>
              <p>Bai-ee's "Acid Beach" (ET001) is a Detroit influenced House track set to 808 drums, 303 bassline and modular driven synth. Released as a full featured (ALPHA) test this interactive music collectible features an integrated looper and token gated download mechanism.</p>
            </div>
            <div className="description-image">
              <img src={unlockable_download_mechanism} alt="edittrax process"/>
            </div>
            <div>
              <h1>RIGHTS</h1>
              <p>As the owner of this collectible, you are granted the right to perform its downloadable content in public. This includes playing in mix-tapes, online streams, social feeds, and live performances. You do NOT have the right to repackage downloaded content for resale or distribution. Assume NO other rights of ownership.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white p-8">
        <div className="font-mathias mb-4 text-center">
          GENESIS COLLECTION
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Link to="/edit-trax/mechanism" id="open">
            <img src={QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj} alt="open-source" className="shadow-5xl"/>
          </Link>
          <Link to="/edit-trax/alpha-test"  id="acid">
            <img src={QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1} alt="acid beach" className="shadow-5xl"/>
          </Link>
          <Link to="/edit-trax/burnt" id="burnt">
            <img src={QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX} alt="burnt" className="shadow-5xl"/>
          </Link>
          <div  id="box"><img src={QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ} alt="boxed" className="shadow-5xl"/></div>
        </div>            
      </section>
      <section className="bg-white px-8 pb-12 rounded-br">
        <div className="grid grid-cols-2 gap-12">
          <div className="mb-4">
            <div className="font-mathias mb-4">HANDBOOK</div>
            <div>
              <img src={handbook_2} alt="handbook"/>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-mathias mb-4">MARKETPLACE</div>
            <div>
              <img src={marketplace_2} alt="market place"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="column">
            <div className="font-mathias mb-4">GITHUB</div>
            <div>
              <img src={github_2} alt="github"/>
            </div>
          </div>
          <div className="">
            <div className="font-mathias mb-4">CONTACT</div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between gap-2">
                <input type="text" placeholder="Full name" className="bg-black rounded-xl py-2 px-2 w-1/2"/>
                <input type="email" placeholder="E-mail" className="bg-black rounded-xl py-2 px-2 w-1/2"/>
              </div>
              <textarea name="" id="" placeholder="Message" className="bg-black rounded-xl h-36 p-4" ></textarea>
              <div>
                <button className="bg-black text-white px-4  py-2 rounded-xl font-mathias">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
      }
    </div>
  );
};

export default Dashboard;
