import { useParams } from "react-router-dom";
import { allProducts } from "../data/product";
import { categoriasAnimals } from "../data/categorias";
import ProductCard from "./ProductCard"; // Importar el componente reutilizable
import { useFindItemByName } from "../hooks/useItemFindName";

const CollectionsIndividual = () => {
  const { name } = useParams();
  const parametro = decodeURIComponent(name ?? "").toLowerCase();

  const categoria = useFindItemByName(categoriasAnimals, "nombre");

  const filtrar = allProducts.filter(
    (prod) => prod.viewMore.collections.toString().trim() === parametro
  );

  return (
    <>
      <div className="grid md:grid-cols-[1fr_5fr] gap-10">
        {/* Primera columna - Collections */}
        <div className=" hidden md:flex md:flex-col">
          <h2 className="mt-5 font-bold text-[20px]">Collections</h2>
          <ul>
            {categoriasAnimals.map((categorias) => (
              <li key={categorias.nombre} className="my-5 font-normal cursor-pointer">
                <div className="flex flex-col my-4">{categorias.nombre}</div>
              </li>
            ))}
          </ul>

          <h2 className="my-10 font-bold text-[20px]">Product vendors</h2>

          <ul>
            <li className="mb-5">
              <a href="">China</a>
            </li>

            <li className="mb-5">
              {" "}
              <a href="">France</a>
            </li>

            <li className="mb-5">
              {" "}
              <a href="">Germany</a>
            </li>
            <li className="mb-5">
              {" "}
              <a href="">Italy</a>
            </li>
            <li className="mb-5">
              {" "}
              <a href="">Norway</a>
            </li>
            <li className="mb-5">
              {" "}
              <a href="">Spain</a>
            </li>
            <li className="mb-5">
              {" "}
              <a href="">USA</a>
            </li>
          </ul>

          <ul></ul>
        </div>

        {/* Segunda columna - Imagen y productos */}
        <div className="">
          <div className="flex justify-between">
            <img src={categoria?.img} alt={categoria?.nombre} />
            <h2 className="text-[60px] uppercase text-[#22a7f0] tracking-wider font-extrabold self-end">
              {categoria?.nombre}
            </h2>
          </div>

          <div className="grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3  gap-5 mx-auto mt-20">
            {filtrar.map((productsFiltrados) => (
              <ProductCard
                key={productsFiltrados.nombre}
                product={productsFiltrados}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsIndividual;
