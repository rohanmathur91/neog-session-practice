import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

// load products on page load
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products }
        } = await axios.get("/api/products");
        setProducts((prev) => products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      <div>
        {products.length > 0
          ? products.map(({ id, name, image, price }) => (
              <div className="card" key={id}>
                <p>{name}</p>
                <img src={image} alt="product" />
                <p>Buy now @{price}</p>{" "}
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
