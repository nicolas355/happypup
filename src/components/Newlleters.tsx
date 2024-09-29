
import { newlletter } from "../data/newlleter";


const Newlleters = () => {
  return (
    <div className="mt-20 mb-36">
      <h2 className="text-center text-[18px] mb-3 font-bold  uppercase ">
        Get the Latest News Delivered Daily
      </h2>

      <p className="text-center text-[14px] mb-3 ">
        Receive a 10% discount code via email when you sign up for our Store
        offers & updates.
      </p>

      <form className="flex gap-5 justify-center items-center " action="">
        <input
          className="block w-full p-2 lg:w-[600px] text-[13px] border border-gray-300 focus:border-blue-700 focus:outline-none"
          type="text"
          placeholder="Enter your Email"
        />
        <button className="py-2 px-7 border border-transparent focus:border-blue-700 focus:bg-blue-500 block text-center uppercase bg-[#22a7f0] hover:bg-[#333] text-white">
          Subscribe
        </button>{" "}
      </form>

      <div className="grid-cols-1 sm:grid-cols-2  grid md:grid-cols-3 mt-10 mb-10">


        {newlletter.map((newllet)=>(
<>

<div className="flex gap-6 my-5 md:my-0">
          <div>
          <newllet.icon />
          </div>

          <div>
            <h4 className="font-bold uppercase">{newllet.title} </h4>
            <h4 className="font-bold uppercase "> {newllet.sub} </h4>
          </div>
        </div>

</>

        ))}


        

    
      </div>
    </div>
  );
};

export default Newlleters;
