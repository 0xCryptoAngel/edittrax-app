import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import et_new_logo from '../assets/et_new_logo.png'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import square_download_mechanism from '../assets/square_download_mechanism.jpg'
import unlockable_download_mechanism from "../assets/unlockable_download_mechanism.png";
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

const navbarMenu = [
  {
    player: "mechanism",
    imageUrl: "https://ipfs.io/ipfs/QmSqWNSGuPCfZQ8uJwhi94aXZDXRDbP5a75MtR7YBgDYDS/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781874&viewer=",
  },
  {
    player: "burnt",
    imageUrl: "https://ipfs.io/ipfs/QmTvcnqnBjcjMQ1gDoG5jSvap7id7t2nhvQLmLiCRqSFqq/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
  },
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
  const param = useParams();
  const result = navbarMenu.find(item => item.player == param.id)
  return (
    <div>
      <section className="container">
        <header className="head">
          <div className="logo">
            <img src={et_new_logo} alt="logo"/>
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
        </header>
        <div className="collectibles">
          <div className="edittrax">
            <iframe src={`${result?.imageUrl}${userAddress}`} className="w-full h-iframe"/>
          </div>
          <button className="collect">Collect</button>
        </div>
        <section className="metrics">
          <div className="grid">
            <h1>1.5</h1>
            <p>TEZ</p>
          </div>
          <div className="grid">
            <h1>75</h1>
            <p>EDITIONS</p>
          </div>
          <div className="grid">
            <h1>55</h1>
            <p>COLLECTORS</p>
          </div>
          <div className="grid">
            <h1>112</h1>
            <p>VOLUME</p>
          </div>
        </section>
        <section className="bai">
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
        <section className="genesis-collection">
          <div className="genesis-heading">
            <h1>GENESIS COLLECTION</h1>
          </div>
          <div className="image-collection">
            <Link to="/edit-trax/mechanism" className="open-source" id="open">
              <img src={QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj} alt="open-source"/>
            </Link>
            <div className="acid-beach" id="acid"><img src={QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1} alt="acid beach"/></div>
            <Link to="/edit-trax/burnt" className="burnt" id="burnt">
              <img src={QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX} alt="burnt"/>
            </Link>
            <div className="boxed" id="box"><img src={QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ} alt="boxed"/></div>
          </div>            
        </section>
        <section className="miscellaneous">
          <div className="row1">
              <div className="column">
                  <div>
                      <h1>HANDBOOK</h1>
                  </div>
                  <div>
                      <img src={handbook_2} alt="handbook"/>
                  </div>
              </div>
              <div className="column">
                  <div>
                      <h1>MARKETPLACE</h1>
                  </div>
                  <div>
                      <img src={marketplace_2} alt="market place"/>
                  </div>
              </div>
          </div>
          <div className="row2">
              <div className="column">
                  <div>
                      <h1>GITHUB</h1>
                  </div>
                  <div>
                      <img src={github_2} alt="github"/>
                  </div>
              </div>
              <div className="column contact">
                  <div>
                      <h1>CONTACT</h1>
                  </div>
                          <div>
                              <input type="text" placeholder="Full name"/>
                              <input type="email" placeholder="E-mail"/>
                          </div>
                          <div>
                              <textarea name="" id="" placeholder="Message"></textarea>
                          </div>
                          <button>Submit</button>
              </div>
          </div>
        </section>
        <Footer/>
      </section>
    </div>
  );
};

export default Dashboard;
