const { createContext, useContext, useState } = require("react");

/*

step1: create a context

step2: have a component which wraps the children with provider of context

step3: create a custom hook for consuming context

step4: export the needed things ie ProviderComponent and custom hook

*/

const defaultContextValue = {
  items: 6,
  logger: () => console.log("logger...")
};

const CartContext = createContext(defaultContextValue);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(4);
  const addToCart = () => setItems((items) => items + 1);

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook for consuming context
const useCart = () => useContext(CartContext);

// keep all exports in one place
export { CartProvider, useCart };
