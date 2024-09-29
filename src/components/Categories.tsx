import { categorias } from "../data/categorias"

const Categories = () => {

  return (
    <div>

<aside className=" lg:block ">
        <h2 className="my-2 lg:my-0 font-extrabold  tracking-widest text-[14px] uppercase ">
          Categories
        </h2>
        <ul className="flex  gap-4 flex-wrap lg:block">
          {categorias.map((categoria) => (
            <>
              <a href="">
                {" "}
                <li
                  className="lg:my-5 text-[16px] hover:text-[#22a8f0be] duration-500 font-normal "
                  key={categoria.id}
                >
                  {categoria.nombre}
                </li>{" "}
              </a>
            </>
          ))}
        </ul>
      </aside>
      
    </div>
  )
}

export default Categories
