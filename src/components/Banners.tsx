import Btn from "./Btn";

const Banners = () => {
  return (
    <section className=" hidden md:grid md:grid-cols-2">
      {/* Primera sección: Contador y texto */}
      <div className="flex banner_1 flex-col items-end justify-center">
        <div className="flex space-x-2"> {/* Ajusté el espacio entre elementos */}
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="redondo">
              <span className="">0</span>
            </div>
            <span className="text-[12px]">Days</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="redondo">
              <span className="">0</span>
            </div>
            <span className="text-[12px]">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="redondo">
              <span className="">0</span>
            </div>
            <span className="text-[12px]">Minutes</span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="redondo">
              <span className="">0</span>
            </div>
            <span className="text-[12px]">Seconds</span>
          </div>
        </div>

        {/* Texto debajo del contador */}
        <div className="flex justify-center items-center mt-3 flex-col text-center">
          <h4 className="font-bold text-[34px]">up to 80% off</h4>
          <h5 className="text-[16px] font-normal tracking-widest">Satisfy Your Pet's Palate</h5>
          <Btn />
        </div>
      </div>

      {/* Segunda sección */}
      <div className="flex banner_2 justify-center items-center flex-col">
        <h4 className="text-[28px] font-bold text-[#22a7f0] uppercase	 ">Hurry Up!</h4>
        <h5 className="text-[50px] font-extrabold uppercase">Save 10%</h5>
        <h6 className="font-bold text-[18px] uppercase ">Only one week!</h6>
        <Btn />
      </div>
    </section>
  );
};

export default Banners;