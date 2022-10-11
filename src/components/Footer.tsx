const Footer = () => {
  return (
    <footer className="text-white py-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="text-center">
          <div className="font-bold text-lg pb-4">DOCUMENTATION</div>
          <div className="text-xs">
            <p>WIKI</p>
            <p>WEBSITE</p>
            <p>HANDBOOK</p>
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold  pb-4">COMUNITY</div>
          <div className="text-xs">TWITTER</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold  pb-4">CONTACT</div>
          <div className="text-xs">EDITTRAX@PROTONMAIL.COM</div>
        </div>
      </div>  
      <hr className="my-4"/>                       
      <div className="flex flex-col justify-center items-center md:flex-row">
        <p>NFT Created by<a href="https://tell.ie/bai_ee/link-in-bio" className="border-b border-white ml-2">Bai-ee</a></p> 
        <span className="text-4xl px-2 hidden md:inline">&#x1f91d;</span>               
        <p>Marketplace Created by Minterverse</p> 
        <span className="text-4xl px-2 align-middle inline md:hidden">&#x1f91d;</span> 
      </div>
    </footer>
  );
};

export default Footer;
