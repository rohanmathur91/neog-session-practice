export const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return {
        ...cart,
        quantity: cart.quantity + 1,
        totalPrice: cart.totalPrice + payload
      };

    case "REMOVE_FROM_CART":
      return {
        ...cart,
        quantity: cart.quantity - 1,
        totalPrice: cart.totalPrice - payload
      };

    default:
      return cart;
  }
};
