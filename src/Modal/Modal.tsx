
// import DropDown from "../components/DropDown";
import ConnectWallet from "../components/ConnectWallet";

import walletProps from "../components/Content";

type modalProps = {
  onClose: () => void;
  show: boolean;
}
const Modal = (props : modalProps) => {

  if (!props.show){
    return null
  }
  return(
  <div className="modal" >
    <div className="modal-bg" onClick={props.onClose}/>
    <div className="modal-content rounded-md p-5  text-center m-5 -mt-14">

      <div className="font-black mt-4">
      1) Collect on any Tezos marketplace
      
    <br></br> 
      </div>

      OBJKT is recommended
      <div className="text-xxs"></div>

      <h2 className="font-mathias md:mt-0 w-full text-3xl sm:text-2xl w-full lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0 pt-5">
      <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="">
      <div onClick={props.onClose} className="font-mathias lg:text-4xl xl:text-4xl outline_button_edit w-34 text-center w-full py-4 px-4  text-yellow-75 rounded-md hover:opacity-50 shadow-2xl" >
        COLLECT
      </div>

      </a>
      </h2>
    
    <div className="pt-4 pb-4   text-center mt-4">

    <div className="font-black   text-center">
      2) Unlock downloads from the player <br></br> 
      </div>
      EditTrax provides the best user experience
      <div className="text-xxs">
        
      </div>
      
      </div>

      <ConnectWallet/>
      &nbsp;&nbsp;
      <div className="bg-transparent mx-0 mb-0 w-auto rounded-sm mt-0 px-0">  
    
    <div className="grid grid-cols-1 gap-2 mx-0 max-w-screen-xl h-auto">
      {/* <button onClick={props.onClose} className="font-mathias outline_button_main text-center w-34 py-4 px-11 mt-0 text-black rounded-md mb-0 shadow-2xl hover:opacity-50 font-mathias md:mt-0 w-full text-3xl">Close </button> */}
      {/* <button onClick={props.onClose} className="font-mathias underline text-center  mt-0 text-black rounded-md mb-0 shadow-2xl font-mathias md:mt-0 w-full text-lg hover:opacity-50">CLOSE </button> */}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Modal