import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="foot documentation">
          <div><h1>DOCUMENTATION</h1></div>
          <div>
            <p>WIKI</p>
            <p>WEBSITE</p>
            <p>HANDBOOK</p>
          </div>
        </div>
        <div className="foot community">
          <div><h1>COMUNITY</h1></div>
          <div><p>TWITTER</p></div>
        </div>
        <div className="foot contact">
          <div><h1>CONTACT</h1></div>
          <div><p>EDITTRAX@PROTONMAIL.COM</p></div>
        </div>
      </div>  
      <hr/>                       
      <div className="foot-note">
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
