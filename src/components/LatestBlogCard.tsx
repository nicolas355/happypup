import { blog } from "../data/blog"; // Asegúrate de que blog sea un array de objetos con la interfaz Blog
import { NavLink } from "react-router-dom";
const LatestBlogCard = () => {
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-32 mt-10">
      {blog.map((item) => (

        
        <NavLink to={`/blog/${item.nombre}` }>


        <div key={item.id}  className="">
          <div className="image_blog relative">
            {/* Fecha posicionada arriba de la imagen */}
            <div className="bg-[#ffffff] font-bold text-[#22a7f0] uppercase absolute top-4 left-4 h-12 items-center flex flex-col w-20 z-10">
              <span className="text-[16px] font-extrabold text-center">
                {item.fecha.split(' ')[1]} {/* Día */}
              </span>
              <span className="text-[10px] font-extrabold text-center">
                {item.fecha.split(' ')[0]} {/* Mes */}
              </span>
            </div>
            
            {/* Imagen */}
            <img src={item.img} alt={item.title} className="w-full h-auto" />
          </div>

          <h3 className="text-black font-normal text-[18px] hover:text-[#22a7f0] cursor-pointer my-1">
            {item.title}
          </h3>
          <p className="text-[13px] text-[#000000b7]">
            {item.descripcion.slice(0, 100)}...
          </p>
        </div>

        </NavLink>

      ))}
    </div>
  );
};

export default LatestBlogCard;