import { Dispatch, SetStateAction, useEffect } from "react";
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

  // connect function for beacon wallet
  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.MAINNET,
          rpcUrl: "https://mainnet.smartpy.io"
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
  
  // disconnect function for beacon wallet
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
        name: "Dj EditTrax",
        preferredNetwork: NetworkType.MAINNET,
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




    <div className="sm:py-4 hidden">

      

      {!beaconConnection ? (
        <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={connectWallet}>
        Unlock Downloads
        </button>
      ) : (
        <button className="bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300" onClick={disconnectWallet}>
          <div>{`${userAddress.slice(0, -28)}...${userAddress.substring(30)}`}</div>
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
