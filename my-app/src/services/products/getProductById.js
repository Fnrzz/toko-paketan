import React from "react";

export const getProductById = async (id) => {
  const result = await fetch("http://localhost:3001/products/" + id);
  const product = await result.json();

  if (product.length === 0) {
    return { success: false, error: "Product not found" };
  }

  return { success: true, product: product };
};
