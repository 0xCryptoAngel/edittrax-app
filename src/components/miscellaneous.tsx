import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';
import square_alpha_test from '../assets/animation/square_alpha_test.jpg';

const miscellaneous = () => {
  return (
    <section className="bg-white px-8 pb-12 rounded-br mx-4 md:mx-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center">HANDBOOK</div>
          <div className="flex justify-center">
            <img src={handbook_2} alt="handbook"/>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center">MARKETPLACE</div>
          <div className="flex justify-center">
            <img src={marketplace_2} alt="market place"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="column">
          <div className="font-mathias mb-4 text-center">GITHUB</div>
          <div className="flex justify-center">
            <img src={github_2} alt="github"/>
          </div>
        </div>
        <div className="">
          <div className="font-mathias mb-4 text-center">CONTACT</div>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between gap-2">
              <input type="text" placeholder="Full name" className="bg-black rounded-xl py-2 px-2 w-1/2"/>
              <input type="email" placeholder="E-mail" className="bg-black rounded-xl py-2 px-2 w-1/2"/>
            </div>
            <textarea name="" id="" placeholder="Message" className="bg-black rounded-xl h-36 p-4" ></textarea>
            <div className="flex justify-center md:justify-start">
              <button className="bg-black text-white px-4  py-2 rounded-xl font-mathias">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default miscellaneous;
