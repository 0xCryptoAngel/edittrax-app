import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { TezosToolkit } from '@taquito/taquito';
import NavBar from "./components/NavBar/NavBar";
import Dashboard from './views/Dashboard'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://mainnet.api.tez.ie")
  );
  const [contract, setContract] = useState<any>(undefined);
  const [wallet, setWallet] = useState<any>(null);
  console.log("wallet", wallet)
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [storage, setStorage] = useState<any>(null);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  return (
    <div className="">
      <BrowserRouter>
          <NavBar
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
          />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
