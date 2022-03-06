export const CounterReducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + payload };

    case "DECREMENT":
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
};
