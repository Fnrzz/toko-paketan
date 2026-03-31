export const getProducts = async (
  page,
  limit,
  { provider, minPrice, maxPrice, minQuota, maxQuota },
) => {
  let url = `http://localhost:3001/products?_page=${page}&_per_page=${limit}`;

  const whereObj = {};

  if (provider) {
    whereObj.provider = {};
    whereObj.provider.eq = provider;
  }

  if (minPrice || maxPrice) {
    whereObj.price = {};
    if (minPrice) whereObj.price.gte = Number(minPrice);
    if (maxPrice) whereObj.price.lte = Number(maxPrice);
  }

  if (minQuota || maxQuota) {
    whereObj.quota = {};
    if (minQuota) whereObj.quota.gte = Number(minQuota);
    if (maxQuota) whereObj.quota.lte = Number(maxQuota);
  }

  if (Object.keys(whereObj).length > 0) {
    url += `&_where={"or":[${JSON.stringify(whereObj)}]}`;
  }

  const result = await fetch(url);
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
    allPages: responseData.pages,
  };
};
