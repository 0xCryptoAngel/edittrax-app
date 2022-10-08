import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import logo from '../assets/et_new_logo.png'
import { useParams, useLocation } from "react-router-dom";

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
  const { state } = useLocation();
  const param = useParams();
  return (
    <div className="max-w-5xl mx-auto h-screen py-12">
      <div className="bg-white py-2 flex items-center px-12 justify-between">
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-10 text-white">
          <img src={logo} alt="logo" className="w-16 h-10"/>
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
      <div className="">
        <iframe src={`https://orbix360.mypinata.cloud/ipfs/QmaLQJCQ2HW514EUpzRfwKa7GuhFxXAHXKXgj9rxyZ26m1/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=612561&viewer=${userAddress}`} className="w-full h-iframe"></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
