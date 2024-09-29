import "../App.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LowerSection from "../components/LowerSection";
import Separator from "../components/Separator";

const Layouts = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <Header />

        {/* Renderiza el componente correspondiente de las rutas */}
        <Outlet />
        
        <LowerSection />

        <div className="absolute mt-16 left-0 w-full bg-black overflow-hidden">
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Layouts;