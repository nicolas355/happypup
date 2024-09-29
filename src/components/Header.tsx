import ArrowDown from "../assets/icons/ArrowDown";
import Heart from "../assets/icons/Heart";

import Search from "../assets/icons/Search";
import User from "../assets/icons/User";
import Navbar from "./Navbar";



const Header = () => {
  return (

    
    <>
    
    <header>
    <div className="flex  items-center justify-between mt-3 mb-5">
      <h3 className="text-[11px]  uppercase font-bold tracking-widest ">Order online or call us (1800) 000 8808</h3>
      <div className="flex  items-center gap-3">


        <Search color="#000" />
        <a href="">     <h3 className="text-[11px] font-medium uppercase hover:text-main_color">Search</h3></a>
   


        <User/>
       <a href=""> <h3 className="text-[11px] font-medium uppercase hover:text-main_color" >My account</h3></a>

        <Heart color="#0000" />
       <a href=""> <h3 className="text-[11px] font-medium uppercase hover:text-main_color">Wishlist</h3></a>


      
     <a href="">   <h3 className="text-[11px] flex items-center ml-4 font-medium uppercase hover:text-main_color">USD  <ArrowDown/> </h3></a>
       

      </div>



      




    </div>

    <Navbar/>



    </header>





    
    </>







  );
};

export default Header;
