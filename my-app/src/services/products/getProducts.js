export const getProducts = async (page, limit) => {
  const result = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${limit}`,
  );
  const responseData = await result.json();
  const products = responseData.data || [];
  if (products.length === 0) {
    return {
      success: false,
      error: "No products found",
      products: [],
    };
  }
  return {
    success: true,
    products: products,
    hasNextPage: responseData.next !== null,
  };
};
