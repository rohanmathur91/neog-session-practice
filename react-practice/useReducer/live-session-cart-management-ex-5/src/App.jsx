import "./styles.css";
import { useCart } from "./cart-context";

export default function App() {
  const { cart, dispatch } = useCart();

  return (
    <div className="App">
      <h1>Cart {cart.quantity}</h1>
      <h1>Total Price: {cart.totalPrice}</h1>
      <div>
        {cart.itemsInCart.map(({ id, name, price }) => (
          <div key={id}>
            <p>{name}</p>
            <p>{price}</p>
            <button
              onClick={() => dispatch({ type: "INCREMENT", payload: price })}
            >
              Add
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: price })
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
