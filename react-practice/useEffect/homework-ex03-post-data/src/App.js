import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [loader, setLoader] = useState("");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/addresses");
      setAddresses(data.addresses);
    })();
  }, []);

  const handleSaveClick = async () => {
    try {
      setLoader((prev) => "saving to server...");

      const { data } = await axios.post("/api/addresses", {
        address: { city: newAddress }
      });

      setAddresses((prevAdresses) => [data.address, ...prevAdresses]);

      // reset
      setLoader("");
      setNewAddress("");
    } catch (error) {
      setLoader((prev) => "Couldn't save the data");
    }
  };

  return (
    <div className="App">
      <h1> address book </h1>
      <input
        required
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={(event) => {
          const { value } = event.target;
          setNewAddress(value);
        }}
      />
      <button onClick={handleSaveClick}> Save Address </button>
      {loader && <div>{loader}</div>}

      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
