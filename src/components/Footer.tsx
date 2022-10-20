import et_new_logo from "@images/et_new_logo.png";

const Footer = () => {
  return (
    <footer className="text-yellow-75 py-12">










<div className="bg-lightblue py-20 px-4">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    Dj EditTrax is the manifestation of self in Web3.
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                  A Chicago based DJ, Producer and Live Performance Act bootstrapping the bottom of their funnel. Exploring sustainable distribution channels to produce, release and archive (scarce) digital music.
                </p>

                {/* EditTrax resonates with djs who create original edits and set multiple que points when selecting tracks for their dance-floors.
                Rapidy edit tracks at the point of download, extending parts you like and removing parts you don't like.
                <br></br>
                <br></br>
                A true bottom of the funnel avoiding digital service providers and 3rd party download platforms saving 20% (plus paypal fees) per transaction.
                
                allow Djs to rapidly create stereo edits of a preloaded track for download, 
                
                
                
                As a producer I can eliminate 3rd-party digital service providers (DSPs) from the distribution process and save a minimum of 20% (plus paypal fees) with my own unlockable download mechanism.
                A framework for creative collaboration between producer, visual artist and coder. Creating uniquely collectible, verifiably scarce, interactive music NFT experiences. 
                
                 */}
                
            </dd>

    
        </dl>
    </div>
</div>







      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="text-center">
          <div className="font-bold text-lg pb-4">DOCUMENTATION</div>
          <div className="text-xs">
          <a href="https://iris-termite-e82.notion.site/OBJKT-612561-824dbe0144744143b43ee26f79f6c50a">
            <p>WIKI</p>
            </a> 

            {/* <a href="https://tell.ie/bai_ee/link-in-bio">
            <p>WEBSITE</p>
            </a> 

            <a href="https://tell.ie/bai_ee/link-in-bio">
            <p>HANDBOOK</p>
            </a>  */}
          </div>
        </div>
        
        <div className="text-center">








        <a href="https://tell.ie/bai_ee/link-in-bio">
          <div className="text-lg font-bold  pb-4">COMMUNITY</div>
          </a> 

          <a href="https://twitter.com/edittrax">
          <div className="text-xs">TWITTER</div>
          </a>  
        
          
        </div>
        <div className="text-center">
          <div className="text-lg font-bold  pb-4">CONTACT</div>
          <a href="https://tell.ie/bai_ee/link-in-bio">
            <div className="text-xs">EDITTRAX@PROTONMAIL.COM</div>
          </a>
        </div>
      </div>  
      {/* <hr className="my-4"/>                        */}
      <div className="flex flex-col mt-16 justify-center items-center md:flex-row text-xs">
        
      <div className="flex items-center space-x-8">
                <ul className="flex space-x-10 text-bg-yellow-75">
                <img src={et_new_logo} alt="logo" className="w-12"/>
                </ul>
        </div>
        
        {/* <p>DjEditTrax.com<a href="https://tell.ie/bai_ee/link-in-bio" className="text-xs border-b border-black ml-2"></a></p>  */}
        {/* <span className="text-4xl px-2 hidden md:inline">&#x1f91d;</span>                */}
        {/* <p>Marketplace Created by Minterverse</p>  */}
        {/* <span className="text-4xl px-2 align-middle inline md:hidden">&#x1f91d;</span>  */}
      </div>



    </footer>
  );
};

export default Footer;
