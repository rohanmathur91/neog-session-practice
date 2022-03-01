import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("After the render happen", count);
    // console.log(count);
  }, []);

  console.log("Before the render happen", count);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <h3>{count}</h3>
    </div>
  );
}
