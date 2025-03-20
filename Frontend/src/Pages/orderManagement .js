import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;