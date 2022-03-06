import { createContext, useContext, useReducer } from "react";
import { CounterReducer } from "./counter-reducer";

const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, { counter: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
