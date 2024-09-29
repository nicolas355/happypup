import { useState } from 'react';
import { useFindItemByName } from "../hooks/useItemFindName";
import { productosPopulares } from "../data/product";
import { allProducts } from "../data/product";
import useCartStore from '../store/CartContext';
import Swal from 'sweetalert2';
const ProductIndividual = () => {

  const { addToCart, cart } = useCartStore();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // Estado para cambiar entre tabs

  // Buscar el producto por nombre
  const findName = useFindItemByName(productosPopulares, "nombre") || useFindItemByName(allProducts, "nombre");

  if (!findName) {
    return <div>Producto no encontrado</div>;
  }



  /* Swal.fire({
      title: "Producto agregado al carrito",
      text: `${product.nombre} ha sido añadido correctamente`,
      icon: "success",
      confirmButtonText: "Ok",
      timer: 2000, // La alerta se cierra automáticamente después de 2 segundos
    });*/
  // Función para cambiar la cantidad
  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };


  const handleCart=()=>{
    addToCart(findName)
    Swal.fire({
      title: "Producto agregado al carrito",
      text: `El producto ha sido añadido correctamente`,
      icon: "success",
      confirmButtonText: "Ok",
      timer: 2000, // La alerta se cierra automáticamente después de 2 segundos
    })
  }
  console.log(cart)

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col lg:flex-row">
        {/* Imagen del producto */}
        <div className="flex-none w-full lg:w-1/2">
          <img
            src={findName.img}
            alt={findName.nombre}
            className="rounded-lg w-full max-w-sm h-auto object-cover mx-auto"
          />
        </div>

        {/* Información del producto */}
        <div className="flex-1 p-5">
          <h2 className="text-3xl font-bold mb-2">{findName.nombre}</h2>
          <p className={`text-sm ${findName.viewMore.availability ? 'text-green-600' : 'text-red-600'}`}>
            {findName.viewMore.availability ? 'Available' : 'Currently Unavailable'}
          </p>
          <p className="text-sm">SKU: {findName.viewMore.sku || 'N/A'}</p>
          <p className="text-sm">Barcode: {findName.viewMore.barcode || 'N/A'}</p>
          <p className="text-sm">Product Type: {findName.viewMore.productType}</p>
          <p className="text-sm">Collections: {findName.viewMore.collections.join(', ')}</p>
          <p className="text-2xl font-semibold mt-4">${findName.price}</p>

          {/* Cantidad */}
          <div className="flex items-center mt-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-200 px-3 py-1 text-lg rounded-l-lg">
              -
            </button>
            <span className="px-4 py-1 border">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-200 px-3 py-1 text-lg rounded-r-lg">
              +
            </button>
          </div>

          {/* Botón de agregar al carrito */}
            
          <button onClick={(handleCart)} className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5">
            Add to Cart
          </button>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="text-blue-700">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="#" className="text-pink-600">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-red-600">
              <i className="fab fa-pinterest fa-2x"></i>
            </a>
            <a href="#" className="text-red-600">
              <i className="fab fa-google fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Menú inferior */}
      <div className="mt-10">
        <div className="flex space-x-8 border-b">
          <button
            className={`py-2 text-lg font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`py-2 text-lg font-semibold ${activeTab === 'delivery' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('delivery')}
          >
            Delivery
          </button>
          <button
            className={`py-2 text-lg font-semibold ${activeTab === 'sizeGuide' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('sizeGuide')}
          >
            Size Guide
          </button>
        </div>

        {/* Contenido dinámico basado en la pestaña activa */}
        <div className="mt-4">
          {activeTab === 'description' && (
            <>
              <h3 className="text-xl font-bold">Description</h3>
              <p>{findName.viewMore.descripcion}</p>
            </>
          )}
          {activeTab === 'delivery' && (
            <>
              <h3 className="text-xl font-bold">Delivery</h3>
              <p>
                How much does delivery cost?
                <br />
                Irish deliveries may be made any time between 8:00am and 8:00pm. Please try to ensure that there is access to the delivery property during this window, however if you are not at home, our couriers will attempt delivery to a secure location or leave your parcel with a neighbour.
                <br />
                Delivery Options:
                <br />
                <strong>Standard</strong>: 3 - 5 working days (if ordered before 8pm) - €2.00
                <br />
                <strong>Ireland Next Day</strong>: Next working day delivery - €6.00
                <br />
                <strong>PLT Royalty</strong>: Unlimited Next Day Delivery For A Year - €9.99
              </p>
            </>
          )}
          {activeTab === 'sizeGuide' && (
            <>
              <h3 className="text-xl font-bold">Size Guide</h3>
              <p>
                <strong>SIZE</strong> LENGTH WEIGHT BREED
                <br />
                Small: 10-12" | 5-9 lbs | chihuahua, toy yorkie
                <br />
                Medium: 12-14" | 10-15 lbs | maltese, yorkie
                <br />
                Large: 14-16" | 16-25 lbs | pug, boston terrier
                <br />
                X Large: 16-19" | 26-30 lbs | franchise, spaniel
                <br />
                <strong>COLLARS</strong>: 5/8" width, 7-14" neck
                <br />
                <strong>LEASHES</strong>: 6 feet
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductIndividual;
