import { useState, useMemo } from "react";

const useFilteredProducts = (products) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return { searchTerm, setSearchTerm, filteredProducts };
};

export default useFilteredProducts;
