import React, { useEffect, useState } from "react";
import axios from "axios";
import InvoiceCard from "../components/InvoiceCard";

const InvoiceManagement = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices")
      .then((response) => setInvoices(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Invoice Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice._id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceManagement;