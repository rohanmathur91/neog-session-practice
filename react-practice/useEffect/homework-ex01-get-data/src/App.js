import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = async () => {
    try {
      setLoad((loader) => !loader);
      const { data } = await axios.get("/api/users");

      setData((prev) => data.users);
      setLoad((loader) => !loader);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Data {load && <span>Loading...</span>}</h1>

      <button onClick={handleClick}> Click to load data from server </button>

      <ul>{data && data.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
    </div>
  );
}
