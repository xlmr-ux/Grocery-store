import React, { useEffect, useState } from "react";
import axios from "axios";
import InventoryCard from "../components/InventoryCard";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/inventory")
      .then((response) => setInventory(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {inventory.map((item) => (
          <InventoryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InventoryManagement;