
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
    <section className="bg-yellow-75 flex flex-col items-center gap-8 px-14 py-14 mb-4 mx-4 md:mb-0 md:pb-0 md:mx-0">
      <div className="flex flex-col items-center gap-8 md:flex-row md:w-full md:gap-8 md:items-end">
      <img src={props.square} alt="rotating head" className="w-52"/>
      <div className="flex flex-col items-center md:items-start md:justify-end md:h-full">
        <div className="font-mathias text-5xl font-bold">BAI-EE</div>
        <div className="text-4xl text-gray-600">"{props.title}"</div>
        <div className="flex flex-wrap gap-4 pt-6">
        { 
          props.keyValue?.map((item, i)=>
            <button className="bg-gray-300 rounded-full px-4 py-1 text-xxs" key={i}>{item}</button>
          )
        }
        </div>
      </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5">
      <div className="font-mathias text-xs text-center space-y-4 md:text-left">
        <h2 className="w-52 mx-auto">MINTED {props.mintedDate}</h2>
        <div className="w-52 mx-auto"><a href={`https://ipfs.io/${props.ipfs}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">LINK TO IPFS</a></div>
        <div className="w-52 mx-auto"><a href={`https://tzkt.io/${props.address}`} target="_blank" rel="noopener noreferrer" className="border-b border-black">CONTACT ADDRESS</a></div>
      </div>
      <div className="flex flex-col mb-10">
        <div>
          <h1 className="font-mathias text-center">DESCRIPTION</h1>
          <div className="test">{props.description}</div>
          </div>
          <img src={props.unlockable} alt="edittrax process"/>
        </div>
      </div>
    </section>
  );
};

export default Content;
