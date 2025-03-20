import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/suppliers" className="bg-blue-500 text-white p-4 rounded-lg text-center">
          Manage Suppliers
        </Link>
        <Link to="/inventory" className="bg-green-500 text-white p-4 rounded-lg text-center">
          Manage Inventory
        </Link>
        <Link to="/orders" className="bg-yellow-500 text-white p-4 rounded-lg text-center">
          Manage Orders
        </Link>
        <Link to="/invoices" className="bg-purple-500 text-white p-4 rounded-lg text-center">
          Manage Invoices
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;