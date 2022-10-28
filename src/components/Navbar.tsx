import { Dispatch, SetStateAction } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import et_new_logo from '../assets/et_new_logo.png'


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

const Navbar = ({
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
    
    <header className="head">

        <div className="logo">
        <a href="https://edittraxnft.on.fleek.co/" target="_blank" className="">
          <img src={et_new_logo} alt="logo"/>
          </a>
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
    </header>
  );
};

export default Navbar;
