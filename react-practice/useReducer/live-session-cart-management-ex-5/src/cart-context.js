import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { itemsInCart } from "./itemsInCart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    itemsInCart,
    quantity: 4,
    totalPrice: 0
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
