import { Button } from "@/components/ui/button";

import { formatCurrency } from "@/lib/formatCurrency";
import { getProducts } from "@/services/products/getProducts";

import React, { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import ModalProduct from "./ModalProduct";

const CardProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const limit = 12;

  const [filters, setFilters] = useState({
    provider: "",
    minPrice: "",
    maxPrice: "",
    minQuota: "",
    maxQuota: "",
  });

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      const response = await getProducts(page, limit, filters);
      if (response.success) {
        setProducts(response.products);
        setHasMore(response.hasNextPage);
        setAllPages(response.allPages);
      }
      if (response.error) {
        setError(response.error);
        setProducts([]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page, filters]);

  const handleNextPage = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="w-full px-4 md:px-10 flex flex-col justify-center gap-5 items-center">
      <div className="w-full">
        <FilterProducts onApplyFilter={handleApplyFilter} />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full flex flex-col items-center border p-4 rounded-lg gap-3 w-48 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-contain"
              />
              <div className="text-center w-full">
                <h2 className="text-md font-bold line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-sm text-blue-600 font-semibold mt-1">
                  {formatCurrency(product.price)}
                </p>
              </div>
              <ModalProduct productData={product} />
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center lg:justify-end items-center gap-6 mt-6">
        <Button
          variant="outline"
          onClick={handlePrevPage}
          disabled={page === 1 || isLoading}
        >
          Previous
        </Button>

        <span className="text-sm font-semibold">
          {page} / {allPages}
        </span>

        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={!hasMore || isLoading}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardProducts;
