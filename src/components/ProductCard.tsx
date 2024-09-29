import Swal from "sweetalert2";
import HeartS from "../assets/icons/HeartS";
import IconCart from "../assets/icons/IconCart";
import Search from "../assets/icons/Search";
import { ProductPopulate } from "../interface/products";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/CartContext";

interface ProductCardProps {
  product: ProductPopulate;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart } = useCartStore();

  console.log("Carrito:", cart); // Verifica el contenido del carrito

  // Función para manejar el clic en los íconos
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation(); // Evita la propagación del evento al NavLink
    console.log("Icono clickeado, pero no navega");
  };

  // Función para mostrar SweetAlert al agregar al carrito
  const handleAddToCart = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    addToCart(product); // Agrega el producto al carrito

    Swal.fire({
      title: "Producto agregado al carrito",
      text: `${product.nombre} ha sido añadido correctamente`,
      icon: "success",
      confirmButtonText: "Ok",
      timer: 2000, // La alerta se cierra automáticamente después de 2 segundos
    });

    console.log("Producto agregado al carrito:", product);
  };

  return (
    <div className="mt-10 cursor-pointer" key={product.id}>
      <NavLink to={`/products/${product.nombre}`}>
        <div className="relative w-[300px] h-[300px] mx-auto group overflow-hidden">
          <img
            className="w-[280px] h-full object-center object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
            src={product.img}
            alt={product.nombre}
          />
          <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 translate-y-[-200px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            <a
              className="p-4 hover:bg-[#333] text-white transform bg-[#22a7f0] transition-transform duration-300 ease-in-out"
              href="#"
              onClick={handleAddToCart} // Usamos la nueva función que incluye SweetAlert
            >
              <IconCart color="#ffff" />
            </a>
            <a
              className="bg-[#22a7f0] p-4 hover:bg-[#333] text-white transform transition-transform duration-300 ease-in-out"
              href="#"
              onClick={handleClick}
            >
              <HeartS />
            </a>
            <a
              className="bg-[#22a7f0] p-4 hover:bg-[#333] text-white transform transition-transform duration-300 ease-in-out"
              href="#"
              onClick={handleClick}
            >
              <Search color="#ffff" />
            </a>
          </div>
        </div>
      </NavLink>

      <h4 className="text-[15px] my-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {product.nombre}
      </h4>
      <p className="text-[17px] font-bold text-[#00000054]">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;