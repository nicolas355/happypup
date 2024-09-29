import { useState } from "react";
import IconCart from "../assets/icons/IconCart";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/CartContext";
const Navbar = () => {
  const {cart}=useCartStore()


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4 items-center flex justify-between">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20" />

      {/* Desktop Menu */}

      <div className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-6">
          <li className="list-none">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"/collections"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Collections
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"/collections/Birds"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Sale
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              About Us
              
            </NavLink>
          </li>


          
        </ul>
      </div>

      {/* Cart - always visible */}
      <div className="hidden md:flex items-center">
        <a className="flex items-center" href="#">
          <IconCart color="#22a7f0" />



          <NavLink to={'/cart'}>


          <p className="text-[14px]">




            <span className="main_color uppercase text-[15px]">My Cart: </span>{" "}
                items : {cart.length}
          </p>

          </NavLink>
        </a>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="z-20">
        <button
          className="text-gray-700 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
        <div className="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 z-30"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute left-0 top-16 bg-white shadow-md w-full md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >

<div className="absolute right-0">
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 cursor-pointer" onClick={toggleMenu} width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" 
stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
</div>



          <li className="list-none p-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="list-none p-2">
            <NavLink
              to={"/collections"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Collections
            </NavLink>
          </li>
          <li className="list-none p-2">
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="list-none p-2">
            <NavLink
              to={"/collections/Birds"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              Sale
            </NavLink>
          </li>
          <li className="list-none p-2">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
                  : "text-[13px] font-extrabold tracking-widest hover:text-[#22a7f0] uppercase"
              }
            >
              About Us
              
            </NavLink>



            
          </li>

          {/* Mobile Cart */}
          <div className="flex items-center p-2">
            <a className="flex items-center" href="#">
              <IconCart color="#22a7f0" />
              <p className="text-[14px]">


                <NavLink to={'/cart'}>


                <span className="main_color uppercase text-[15px]">
                  My Cart:{" "}
                </span>{" "}
                0 item(s)

                </NavLink>

              </p>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
