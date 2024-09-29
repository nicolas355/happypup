import logo from "../img/logo.png";
import Categories from "./Categories";

import { myAccount } from "../data/categorias";
import { information } from "../data/categorias";


const LowerSection = () => {
  return (
    <div className="grid lg:grid lg:grid-cols-4 justify-center items-start gap-8 mt-36">
      <div>
        <img className="cursor-pointer" width={100} src={logo} alt="" />
        <p className="text-[13px] mt-5 leading-loose">
          Our Pet Shop values quality, comfort and individuality of the products
          we sell. We want our clients and their pets to receive the best
          service and goods, that’s why we work only with proven and respected
          manufacturers.
        </p>
      </div>

      <div>
        <Categories />
      </div>

      <div className="hidden lg:block">
        <aside className="">
          <h2 className="font-extrabold tracking-widest text-[14px] uppercase">
            Information
          </h2>
          <ul className="">
            {information.map((info) => (
              <li
                key={info.id}
                className="my-4 text-[14px] hover:text-[#22a8f0be] duration-500 font-normal"
              >
                <a href="#">{info.nombre}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="hidden lg:block">
        <aside className="">
          <h2 className="font-extrabold tracking-widest text-[14px] uppercase">
            My account
          </h2>
          <ul className="">
            {myAccount.map((account) => (
              <li
                key={account.id}
                className="my-4 text-[14px] hover:text-[#22a8f0be] duration-500 font-normal"
              >
                <a href="#">{account.nombre}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default LowerSection;