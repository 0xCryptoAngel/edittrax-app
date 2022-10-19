import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';

const miscellaneous = () => {
  return (
    <section className="bg-yellow-75 pt-12 px-8 pb-12 rounded-br mx-4 md:mx-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center">HANDBOOK</div>
          <div className="flex justify-center hover:shadow-2xl">
            <img src={handbook_2} alt="handbook"/>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-mathias mb-4 text-center">MARKETPLACE</div>
          <div className="flex justify-center hover:shadow-2xl">
            <img src={marketplace_2} alt="market place"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="column">
          <div className="font-mathias mb-4 text-center">GITHUB</div>
          <div className="flex justify-center hover:shadow-2xl">
            <img src={github_2} alt="github"/>
          </div>
        </div>

        <div className="column">
          <div className="font-mathias mb-4 text-center">GITHUB</div>
          <div className="flex justify-center hover:shadow-2xl">
            <img src={github_2} alt="github"/>
          </div>
        </div>



        
      </div>
    </section>
  );
};

export default miscellaneous;
