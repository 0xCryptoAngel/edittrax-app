
// import DropDown from "../components/DropDown";
import ConnectWallet from "../components/ConnectWallet";

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
    <div className="modal-content rounded-md p-10">
      <div className="modal-header">
        <div className="text-2xl modal-title font-mathias flex justify-center text-center">Advanced Mode <br></br>(How to Download)</div>
      </div>

      To unlock and download your edits first collect this token in your wallet. Purchase it from a Tezos Marketplace, we recommend OBJKT.com. 
      <br></br>
      <h2 className="font-mathias md:mt-0 w-full text-3xl sm:text-2xl w-full lg:text-4xl xl:text-4xl font-extrabold align-middle mb-0 pt-5">
      <a href="https://objkt.com/asset/hicetnunc/612561"  target="_blank" rel="noreferrer" className="">
      <div onClick={props.onClose} className="font-mathias lg:text-4xl xl:text-4xl bg-yellow-900 w-34 text-center w-full py-4 px-4  text-yellow-75 rounded-md hover:opacity-50 shadow-2xl" >
      Collect
      </div>
      </a>
    </h2>
 
 <div className="pt-4 pb-4 text-justify">
    You can then unlock and download edits from your collectible EditTrax player directly from that link. But connecting here at EditTrax.com provides a full-featured user experience.
    </div>    

      <ConnectWallet/>
  
      &nbsp;&nbsp;

      <div className="bg-transparent mx-0 mb-4 w-auto rounded-sm mt-0 px-0">  
  <div className="grid grid-cols-1 gap-2 mx-0 max-w-screen-xl h-auto">






    <button onClick={props.onClose} className="font-mathias outline_button_main text-center w-34 py-4 px-11 mt-0 text-black rounded-md mb-0 shadow-2xl hover:opacity-50 font-mathias md:mt-0 w-full text-3xl">Close </button>



      </div>
      </div>
    </div>
  </div>
  )
}

export default Modal