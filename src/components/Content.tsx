

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import square_download_mechanism from '../assets/square_download_mechanism.jpg'
import square_boxxed from "../assets/square_boxxed.png";
import square_burnt from '../assets/square_burnt.jpg'
import square_alpha_test from "../assets/square_alpha_test.png";

import unlockable_burnt from '../assets/unlockable_burnt.jpg'
import unlockable_boxxed from "../assets/unlockable_boxxed.png";
import unlockable_alpha_test from '../assets/unlockable_alpha_test.jpg'
import unlockable_download_mechanism from "../assets/unlockable_download_mechanism.png";

const Content = (props:any) => {

  return (
    <section className="bg-white flex flex-col  items-center gap-8 px-8 py-12 mb-4 mx-4 md:mb-0 md:pb-0 md:mx-0">
      <div className="flex flex-col items-center gap-8 md:flex-row md:w-full md:gap-8 md:items-end">
      <img src={`${props.square}`} alt="rotating head" className="w-52"/>
      <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
        <div className="font-mathias text-5xl font-bold">BAI-EE</div>
        <div className="font-mathias text-5xl font-bold text-gray-300">"ACID BEACH"</div>
        <div className="flex flex-wrap gap-4 pt-6">
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
          <img src={`${props.unlockable}`} alt="edittrax process"/>
          <div>
          <h1 className="font-mathias text-center">RIGHTS</h1>
          <p>As the owner of this collectible, you are granted the right to perform its downloadable content in public. This includes playing in mix-tapes, online streams, social feeds, and live performances. You do NOT have the right to repackage downloaded content for resale or distribution. Assume NO other rights of ownership.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Content;
