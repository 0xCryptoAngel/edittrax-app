import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  NetworkType,
  BeaconEvent,
  defaultEventCallbacks
} from "@airgap/beacon-sdk";

type WalletProps = {
  Tezos: TezosToolkit;
  setContract: Dispatch<SetStateAction<any>>;
  setWallet: Dispatch<SetStateAction<any>>;
  setUserAddress: Dispatch<SetStateAction<string>>;
  userAddress: string;
  setStorage: Dispatch<SetStateAction<any>>;
  beaconConnection: boolean;
  setUserBalance: Dispatch<SetStateAction<number>>;
  setBeaconConnection: Dispatch<SetStateAction<boolean>>;
  wallet: BeaconWallet;
};


const ConnectButton = ({
  Tezos,
  setContract,
  setWallet,
  userAddress,
  setStorage,
  beaconConnection,
  setUserAddress,
  setUserBalance,
  setBeaconConnection,
  wallet
}: WalletProps): JSX.Element => {

  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.KATHMANDUNET,
          rpcUrl: "https://rpc.kathmandunet.teztnets.xyz"
        }
      });
      // gets user's address
      const walletAddress = await wallet.getPKH();
      //  // creates contract instance
      // const contract = await Tezos.wallet.at('KT1F3h2zgF8AKqWj2r4WsWaSNVVxCsHoeZYQ');
      // setContract(contract);
      // const storage: any = await contract.storage();
      // setStorage(storage);
      setUserAddress(walletAddress)
      setBeaconConnection(true)
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = async (): Promise<void> => {
    setUserAddress("");
    setWallet(null);
    console.log("disconnecting wallet");
    setBeaconConnection(false)
    if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.destroy();
      window.location.reload()
    }
  };
  useEffect(() => {
    (async () => {
      // creates a wallet instance
      const initWallet = new BeaconWallet({
        name: "WildLands",
        preferredNetwork: NetworkType.KATHMANDUNET,
        disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
        eventHandlers: {
          // To keep the pairing alert, we have to add the following default event handlers back
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT
          }
        }
      });
      Tezos.setWalletProvider(initWallet);
      setWallet(initWallet);
      // checks if wallet was connected before
      const activeAccount = await initWallet.client.getActiveAccount();
      if (activeAccount) {
        setBeaconConnection(true)
        const walletAddress = await initWallet.getPKH();
        setUserAddress(walletAddress)
      }
    })();
  }, [Tezos, beaconConnection, setBeaconConnection, setUserAddress, setWallet]);

  return (
    <div className="">
      {!beaconConnection ? (
        <button className="bg-black rounded text-white font-bold py-2 w-40 hover:text-gray-300" onClick={connectWallet}>
        Connect wallet
      </button>
      ) : (
        <button className="bg-black rounded text-white  py-2 w-40" onClick={disconnectWallet}>
          <div>{`${userAddress.slice(0, -28)}...${userAddress.substring(30)}`}</div>
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
