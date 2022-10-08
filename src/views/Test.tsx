import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
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
import Navbar from "../components/Navbar";

const Test = () => {
  return (
    <div>
       <section className="container">
        <Navbar/>
        <div className="collectibles">
          <div className="edittrax">
            <iframe src="https://orbix360.mypinata.cloud/ipfs/QmaLQJCQ2HW514EUpzRfwKa7GuhFxXAHXKXgj9rxyZ26m1/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=null"></iframe>
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
            <div className="open-source" id="open"><img src={QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj} alt="open-source"/></div>
            <div className="acid-beach" id="acid"><img src={QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1} alt="acid beach"/></div>
            <div className={QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX} id="burnt"><img src="" alt="burnt"/></div>
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

export default Test;
