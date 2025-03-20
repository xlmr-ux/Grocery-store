import React from "react";

const InvoiceCard = ({ invoice }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Invoice ID: {invoice._id}</h2>
      <p className="text-gray-700">Supplier: {invoice.supplierId.fullName}</p>
      <p className="text-gray-700">Total Items Supplied: {invoice.totalItemsSupplied}</p>
      <p className="text-gray-700">Total Amount Due: £{invoice.totalAmountDue