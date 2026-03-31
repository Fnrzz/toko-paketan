import { getProductById } from "../products/getProductById";

export const addTransaction = async (productId, userId) => {
  const responseProduct = await getProductById(productId);

  if (!responseProduct.success) {
    return { success: false, error: "Produk tidak ditemukan" };
  }

  const product = responseProduct.product;

  const response = await fetch("http://localhost:3001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      productId: product.id,
      date: new Date().toISOString(),
      status: "success",
      totalPrice: product.price,
    }),
  });

  if (!response.ok) {
    return { success: false, error: "Gagal membuat transaksi" };
  }

  return { success: true };
};
