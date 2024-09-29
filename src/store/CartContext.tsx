import { create } from "zustand";
import { AllProducts } from "../interface/products";
import randomId from "../utils/RandomUUID";

// Definimos la estructura del estado global y las acciones
interface CartState {
  cart: AllProducts[]; // Estado del carrito
  addToCart: (product: Omit<AllProducts, "id">) => void; // Acción para agregar producto
  clearCart: () => void; // Acción para vaciar el carrito
  removeFromCart: (id: string) => void; // Acción para eliminar producto
}

// Creamos el estado global con Zustand
export const useCartStore = create<CartState>((set) => ({
  cart: [], // Estado inicial del carrito (vacío)

  // Función para agregar un producto al carrito
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.nombre === product.nombre); // Cambia `id` por `nombre` o usa un identificador único

      if (existingProduct) {
        const updatedCart = state.cart.map(item => {
          if (item.nombre === existingProduct.nombre) {
            return {
              ...item,
              viewMore: {
                ...item.viewMore,
                quantity: item.viewMore.quantity + 1, // Incrementa la cantidad
              }
            };
          }
          return item; // Retorna el item sin cambios
        });

        return { cart: updatedCart };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              id: randomId, // Llamamos a la función para generar un ID único
              ...product,
              viewMore: { ...product.viewMore, quantity: 1 }, // Establecemos la cantidad en 1
            },
          ],
        };
      }
    });
  },

  // Función para vaciar el carrito
  clearCart: () => {
    set(() => ({
      cart: [],
    }));
  },

  // Función para eliminar un producto del carrito
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter(item => item.id !== id), // Filtra el carrito para eliminar el producto
    }));
  },
}));

export default useCartStore;