import React from "react";

const InventoryCard = ({ item }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{item.productId.productName}</h2>
      <p className="text-gray-700">Total Received: {item.totalReceived}</p>
      <p className="text-gray-700">Total Sold: {item.totalSold}</p>
      <p className="text-gray-700">Total Available: {item.totalAvailable}</p>
      <p className="text-gray-700">Total Sales Amount: £{item.totalSalesAmount}</p>
    </div>
  );
};

export default InventoryCard;