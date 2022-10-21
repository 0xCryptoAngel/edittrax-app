
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

const Modal = props => {

    if (!props.show){
        return null
        console.log("hitting if")
    }
        console.log("hitting else")
    return(

            <div className="modal">
                <div className="modal-content rounded-md  p-10">
                    <div className="modal-header">
                        <div className="text-2xl modal-title font-mathias flex justify-center">Advanced Mode</div>
                    </div>
                    <div className="modal-body p-10">

                    EditTrax is an interactive music application that has the ability to run code within the safe environment of a sandboxed iframe. A token can potentially interact with your browser wallet and prompt you to connect. Do not interact with any requests that you did not initiate yourself. We recommend reading the <nbsp></nbsp>
                    <a href="https://opensea.io/blog/guides/non-fungible-tokens/" target='_blank' className="underline font-bold">NFT BIBLE </a> if you are new to digital collectibles.<br></br><br></br>
                   

                    
                    <div className="modal-footer m-auto flex justify-center">
                        <button onClick={props.onClose} className="button bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300">CLOSE</button>
                    </div>
                    </div>
                </div>
            </div>

            )
}

export default Modal