import { categoriasAnimals } from "../data/categorias"
import { NavLink } from "react-router-dom"

const Collections = () => {



 

 

  return (
    <div>
       <div className="grid grid-cols-3 gap-20">


        


        {categoriasAnimals.map((categoriaAnimal) => (
          <>
            <div className="relative group    overflow-hidden" key={categoriaAnimal.id}>

              

          <NavLink to={`/collections/${categoriaAnimal.nombre}`}>


           <div className="absolute transition-all cursor-pointer duration-200 ease-in-out  group-hover:scale-110 hover:text-white hover:items-center flex hover:justify-center    inset-0 hover:bg-[#22a8f0be] hover:transition-all ">
            
           <span className="text-[18px] font-extrabold ">
                {" "}
                {categoriaAnimal.nombre}{" "}
              </span>
           </div>

              
              <img src={categoriaAnimal.img} alt="" />
          </NavLink>
              
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Collections
