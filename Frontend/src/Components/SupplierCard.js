import React from "react";

const SupplierCard = ({ supplier }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{supplier.fullName}</h2>
      <p className="text-gray-700">{supplier.email}</p>
      <p className="text-gray-700">{supplier.phoneNumber}</p>
      <p className="text-gray-700">{supplier.productSupplied}</p>
    </div>
  );
};

export default SupplierCard;