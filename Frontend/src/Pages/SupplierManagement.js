import React, { useEffect, useState } from "react";
import axios from "axios";
import SupplierCard from "../components/SupplierCard";

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/suppliers")
      .then((response) => setSuppliers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suppliers.map((supplier) => (
          <SupplierCard key={supplier._id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

export default SupplierManagement;