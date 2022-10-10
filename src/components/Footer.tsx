import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="grid grid-cols-3 gap-5">
        <div className="text-center">
          <div><h1>DOCUMENTATION</h1></div>
          <div>
            <p>WIKI</p>
            <p>WEBSITE</p>
            <p>HANDBOOK</p>
          </div>
        </div>
        <div className="text-center">
          <div><h1>COMUNITY</h1></div>
          <div><p>TWITTER</p></div>
        </div>
        <div className="text-center">
          <div><h1>CONTACT</h1></div>
          <div><p>EDITTRAX@PROTONMAIL.COM</p></div>
        </div>
      </div>  
      <hr/>                       
      <div className="text-center">
        <p>NFT Created by 
          <a href="#">Bai-ee</a> 
          <span>&#x1f91d;</span>               
            Marketplace Created by
            Minterverse
        </p>                    
      </div>
    </footer>
  );
};

export default Footer;
