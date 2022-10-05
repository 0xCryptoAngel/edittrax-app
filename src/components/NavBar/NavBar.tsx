import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../ConnectWallet";
import { Link } from "react-router-dom";

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

const NavBar = ({
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
  return (
    <div className="bg-gray-660 py-2 flex items-center px-12 justify-between">
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-10 text-white">
          <Link to="/mint" >
            <li>Mint</li>
          </Link>
          
          <Link to="/#" >
            <li>News</li>
          </Link>
          
          <Link to="/#" >
            <li>Patch notes</li>
          </Link>
          
          <Link to="/#" >
            <li>Marketplace</li>
          </Link>
          <a href="https://docs.wildlands.io/" target="_blank">
            <li>Gameplay</li>
          </a>
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
  );
};

export default NavBar;
