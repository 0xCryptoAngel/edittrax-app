import React, { useState } from "react";
import {TezosToolkit, MichelsonMap} from '@taquito/taquito';
import {BeaconWallet} from '@taquito/beacon-wallet';


type WalletProps = {
  Tezos: TezosToolkit;
  userAddress: string;
  contract: any;
  storage: any;
  beaconConnection: boolean;
  wallet: BeaconWallet;
};

const Mint =  ({
  Tezos,
  userAddress,
  contract,
  storage,
  beaconConnection,
  wallet,
}: WalletProps): JSX.Element => {
  const [amount, setAmount] = useState<number>(1);

  const mintNFT = async () => {
    if(beaconConnection) {
      let isWhiteList = storage?.whitelist?.includes(userAddress);
      let last_token_id = storage?.last_token_id?.toNumber();
      console.log("last_token_id", last_token_id)
      
      const mintData = []
      for (let index = 1; index <= amount; index++) {
        mintData.push(userAddress)
      }
      try {
        if(isWhiteList) {
          const op = await contract.methods.mint(mintData).send({amount: amount * 15.1});
          await op.confirmation();
        } else {
          const op = await contract.methods.mint(mintData).send({amount: amount * 20.1});
          await op.confirmation();
        }
      } catch (error) {
        console.log("error", error)
      }
    } else {
      console.log("please connect wallet!!!")
    }
  }
  
  return (
    <div className="mint-board">
      <div className="text-4xl font-bold text-center w-100 mx-auto py-6">Are you ready to conquer the Wildlands</div>
      <div className="text-center w-100 mx-auto">Those on our website list can mint up to 5 Haven Orbs for a discounted price of 15 Tezos.</div>
      <div className="bg-gray-600 w-96 mx-auto rounded-2xl text-white my-6 p-4">
        <div className="text-3xl text-white text-center">Mint Haven Orb <br/> <span className="text-2xl">1000 NFTs</span></div>
        <div>Amount</div>
        <input type="text" className="w-full border-b-2 border-white bg-gray-600 outline-none mb-2" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
        <div className="flex justify-center">
          <button className="bg-indigo-700 rounded text-white  py-2 w-40 hover:bg-indigo-500" onClick={mintNFT}>
            MINT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
