
import useCartStore from "../store/CartContext";
import { AllProducts } from "../interface/products"; // Importar correctamente la interfaz

const CartPage = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useCartStore();

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    const product = cart.find(item => item.id === id);
    if (product && quantity >= 0) {
      addToCart({
        ...product,
        viewMore: {
          ...product.viewMore,
          quantity, // Actualiza la cantidad en el store
        },
      });
    }
  };

  const getTotalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div>
      <h2 className="text-center text-[23px] font-bold my-5 ">Your Cart</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b">Image</th>
            <th className="border-b">Product</th>
            <th className="border-b">Price</th>
            <th className="border-b">Quantity</th>
            <th className="border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item: AllProducts) => (
              <tr key={item.id}>
                <td className="border-b">
                  <img src={item.img} alt={item.nombre} className="w-16 h-16" />
                </td>
                <td className="border-b">
                  <div>
                    {item.nombre}
                    <br />
                    <span className="text-sm">Product type: {item.viewMore.productType}</span>
                    <br />
                    <span className="text-sm">Vendor: {item.viewMore.vendedor}</span>
                    <br />
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500">
                    REMOVE
                  </button>
                </td>
                <td className="border-b">${item.price.toFixed(2)}</td>
                <td className="border-b">
                  <input
                    type="number"
                    value={item.viewMore.quantity}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="border p-1 w-16 text-center"
                  />
                </td>
                <td className="border-b">${getTotalPrice(item.price, item.viewMore.quantity).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">Your cart is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
            Checkout
          </button>
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded ml-4">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;