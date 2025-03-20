import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded-lg shadow-lg"
    >
      <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{product.productName}</h2>
      <p className="text-gray-700">£{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;