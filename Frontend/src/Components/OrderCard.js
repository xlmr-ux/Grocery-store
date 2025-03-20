import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
      <p className="text-gray-700">Customer: {order.customerId.fullName}</p>
      <p className="text-gray-700">Total Amount: £{order.totalAmount}</p>
      <p className="text-gray-700">Payment Method: {order.paymentMethod}</p>
      <p className="text-gray-700">Status: {order.status}</p>
    </div>
  );
};

export default OrderCard;