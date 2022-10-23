import et_horiz from "@images/et_horizontal.png";

const Footer = () => {
  return (

    <footer className="bg-black p-28 dark:bg-gray-900">

{/* 
<div className="flex flex-col mb-16">
  <h2 className="mb-4 text-2xl font-bold">Feature Cards</h2>

  <div className="mt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">574 Messages</h2>
        <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
      </div>
    </div>

    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">1823 Users</h2>
        <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">548 Posts</h2>
        <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">129 Comments</h2>
        <p className="mt-2 text-sm text-gray-500">Last commented 8 days ago</p>
      </div>
    </div>
  </div>
</div> */}









    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
            {/* <img src="../assets/et_horizontal.png" className="mr-3 h-8" alt="EditTrax Logo" /> */}
                <img src={et_horiz} alt="logo" id="logo_test" className="w-44 mb-8 ms:mb-0 sm:w-44"/>
      
            </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-8 sm:grid-cols-4">
            <div>
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">About</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://iris-termite-e82.notion.site/OBJKT-612561-824dbe0144744143b43ee26f79f6c50a" className="hover:underline">How To</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Live Wiki</a>
                    </li>
                    <li>
                    {/* <a href="https://hic.af/objkt/612561" className="hover:underline">Manifesto</a> */}
                        {/* <a href="https://hic.af/objkt/612561" className="hover:underline">EditTrax.Live</a> */}
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">Events</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Calendar</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Spatial</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">Social</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Twitter</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Voxels</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white">Connect</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Email</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Calendly</a>
                    </li>

                </ul>
                
            </div>
            {/* <div>
                <h2 className="font-mathias mb-6 text-lg font-semibold text-yellow-75 uppercase dark:text-white"> Design & Tech</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Figma</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>

                </ul>
                
            </div> */}
        </div>
    </div>
    <hr className="my-6 text-yellow-75 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">EditTrax™</a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* <a href="#" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </a> */}
            <a href="#" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </a>
            {/* <a href="#" className="text-yellow-75 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Dribbbel account</span>
            </a> */}
        </div>
    </div>
</footer>



// <footer classNameName="text-yellow-75 py-12">
// <div classNameName="bg-lightblue py-20 px-4">
//     <div classNameName="mx-auto max-w-6xl flex flex-col md:flex-row">
//         <h2 classNameName="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
//             Frequently-asked questions
//         </h2>
//         <dl classNameName="w-full md:w-2/3">
//             <dt classNameName="mb-4">
//                 <h3 classNameName="text-xl font-semibold">
//                     Dj EditTrax is the manifestation of self in Web3.
//                 </h3>
//             </dt>
//             <dd classNameName="mb-16">
//                 <p>
//                   A Chicago based DJ, Producer and Live Performance Act bootstrapping the bottom of their funnel. Exploring sustainable distribution channels to produce, release and archive (scarce) digital music.
//                 </p>

//                 {/* EditTrax resonates with djs who create original edits and set multiple que points when selecting tracks for their dance-floors.
//                 Rapidy edit tracks at the point of download, extending parts you like and removing parts you don't like.
//                 <br></br>
//                 <br></br>
//                 A true bottom of the funnel avoiding digital service providers and 3rd party download platforms saving 20% (plus paypal fees) per transaction.
                
//                 allow Djs to rapidly create stereo edits of a preloaded track for download, 
                
                
                
//                 As a producer I can eliminate 3rd-party digital service providers (DSPs) from the distribution process and save a minimum of 20% (plus paypal fees) with my own unlockable download mechanism.
//                 A framework for creative collaboration between producer, visual artist and coder. Creating uniquely collectible, verifiably scarce, interactive music NFT experiences. 
                
//                  */}
                
//             </dd>

    
//         </dl>
//     </div>
// </div>

//       <div classNameName="grid grid-cols-1 gap-5 md:grid-cols-3">
//         <div classNameName="text-center">
//           <div classNameName="font-bold text-lg pb-4">DOCUMENTATION</div>
//           <div classNameName="text-xs">
//           <a href="https://iris-termite-e82.notion.site/OBJKT-612561-824dbe0144744143b43ee26f79f6c50a">
//             <p>WIKI</p>
//             </a> 
//           </div>
//         </div>
        
//         <div classNameName="text-center">

//         <a href="https://tell.ie/bai_ee/link-in-bio">
//           <div classNameName="text-lg font-bold  pb-4">COMMUNITY</div>
//           </a> 

//           <a href="https://twitter.com/edittrax">
//           <div classNameName="text-xs">TWITTER</div>
//           </a>  
        
          
//         </div>
//         <div classNameName="text-center">
//           <div classNameName="text-lg font-bold  pb-4">CONTACT</div>
//           <a href="https://tell.ie/bai_ee/link-in-bio">
//             <div classNameName="text-xs">EDITTRAX@PROTONMAIL.COM</div>
//           </a>
//         </div>
//       </div>  

//       <div classNameName="flex flex-col mt-16 justify-center items-center md:flex-row text-xs">
        
//       <div classNameName="flex items-center space-x-8">
//                 <ul classNameName="flex space-x-10 text-bg-yellow-75">
//                 <img src={et_new_logo} alt="logo" className="w-12"/>
//                 </ul>
//         </div>

//       </div>
      
//     </footer>


  );
};

export default Footer;
