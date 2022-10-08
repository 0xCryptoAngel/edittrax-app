import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import et_new_logo from '../assets/et_new_logo.png'

const Navbar = () => {
  return (
    <header className="head">
      <div className="logo">
        <img src={et_new_logo} alt="logo"/>
      </div>
      <button className="connect-wallet">Connect Wallet</button>
    </header>
  );
};

export default Navbar;
