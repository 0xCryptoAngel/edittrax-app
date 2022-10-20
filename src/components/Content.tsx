
type WalletProps = {
  square:  string | undefined,
  unlockable:  string | undefined,
  title: string | undefined,
  keyValue: string[] | undefined,
  description: string | undefined,
  mintedDate: string | undefined,
  ipfs: string | undefined,
  address: string | undefined,
};

const Content = (props:WalletProps) => {
  console.log("props.mintedDate", props.description)
  return (
    <section className="bg-yellow-75 flex flex-col items-center gap-16 px-14 py-14 mb-0 mx-4 md:mb-0 md:pb-0 md:mx-0">
      
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">

        <img src={props.square} alt="rotating head" className="w-md max-w-xs rounded-md"/>

        <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
          <div className="font-mathias text-6xl font-bold text-center">BAI-EE</div>
          <div className="font-mathias text-2xl mt-4 text-2xl text-black text-center">"{props.title}"</div>
        </div>
        
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-5">

        <div className="font-mathias text-md text-center space-y-4 md:text-left">
        <h1 className="font-mathias text-2xl md:text-left">METADATA</h1>
          <h2 className="w-52 mx-auto md:mt-2">MINTED {props.mintedDate}</h2>
          <div className="w-52 mx-auto"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">CONTRACT ADDRESS</a></div>
          <div className="w-52 mx-auto"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">LINK TO CREATIVE ON IPFS</a></div>
        </div>
        <div className="flex flex-col">
        {/* <img className="max-w-lg"src={props.unlockable} alt="edittrax process"/> */}
          {/* <div className="flex flex-col justify-center align-middle"> */}
            <h1 className="font-mathias mt-12 text-2xl">UTILITY</h1>
            <img className="w-lg sm:max-w-xs md:max-w-md"src={props.unlockable} alt="edittrax process"/>
          {/* </div> */}
          <h1 className="font-mathias mt-4 text-2xl mt-12 text-center md:text-left">DESCRIPTION</h1>
          <div className="test mt-6 max-w-lg mb-4">{props.description}</div>
          <div className="flex flex-wrap gap-4 mb-8 pt-6 justify-center max-w-md">
          { 
            props.keyValue?.map((item, i)=>
              <button className="bg-black rounded-full px-4 py-1 text-yellow-75 text-xxs" key={i}>{item}</button>
            )
          }
          </div>
            
        </div>
        
      </div>

    </section>
  );
};

export default Content;
