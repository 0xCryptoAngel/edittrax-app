import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { TezosToolkit } from '@taquito/taquito';
import Dashboard from './views/Dashboard';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './wallet/wallet';
import MetamaskProvider from './wallet/useEagerConnect';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://mainnet.smartpy.io")
  );
  const [contract, setContract] = useState<any>(undefined); // state variable for contract
  const [wallet, setWallet] = useState<any>(null); // state variable for contract
  console.log("wallet", wallet)
  const [userAddress, setUserAddress] = useState<string>(""); // state variable for wallet address
  const [userBalance, setUserBalance] = useState<number>(0); // state variable for user balance
  const [storage, setStorage] = useState<any>(null); // state variable for storage of contract, you can see some information from storage like last tokenID
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false); // state varialble that show wallet connect state
  
  return (
    <div className="bg-black">

      
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Navigate to="/edit-trax/alpha-test"/> }/>
              <Route path="/edit-trax/:id" element={<Dashboard
                Tezos={Tezos}
                setContract={setContract}
                setWallet={setWallet}
                setStorage={setStorage}
                setUserAddress={setUserAddress}
                userAddress={userAddress}
                beaconConnection={beaconConnection}
                setUserBalance={setUserBalance}
                setBeaconConnection={setBeaconConnection}
                wallet={wallet}
              />} />
            </Routes>
          </BrowserRouter>
        </MetamaskProvider>
      </Web3ReactProvider>
    </div>
  );
};

export default App;
