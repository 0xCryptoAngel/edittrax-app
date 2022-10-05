import React, { useState } from "react";
import main from '../assets/main.png';
import discord from '../assets/discord.svg';
import footer from '../assets/footer.png';
import tokenomics from '../assets/tokenomics.svg';
import landmark from '../assets/landmark.png';

const Dashboard = () => {
  return (
    <div className="bg-gray-760">
      <div className="main-board pt-24 pb-96 justify-center flex">
        <img src={landmark} alt="landmark" />
      </div>
      <div className="py-8 flex px-40 justify-between">
        <div className="bg-black w-5/12 flex space-x-8 p-8 items-center">
          <img src={discord} alt="discord" className="w-24 h-20" />
          <div className="flex flex-col space-y-2">
            <div className="text-white text-center">Join our Discord to learn more about our community!</div>
            <div className="flex justify-center">
              <button className="bg-indigo-700 text-white px-4 py-2 rounded">Join Discord</button>
            </div>
          </div>
        </div>
        <div className="bg-black w-5/12 space-x-8 flex p-8 items-center">
          <img src={tokenomics} alt="tokenomics" className="w-24 h-20" />
          <div className="flex flex-col space-y-2">
            <div className="text-white text-center">Read our Tokenomics page for more information on gameplay</div>
            <div className="flex justify-center">
              <button className="bg-indigo-700 text-white px-4 py-2 rounded">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-board pt-40 pb-96">
        <div className="text-3xl text-center">Our Haven NFT Orbs drop on August 21st. Be accepted in our whitelist for a discount!</div>
      </div>
    </div>
  );
};

export default Dashboard;
