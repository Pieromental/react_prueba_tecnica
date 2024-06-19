import useProducts from "../hooks/useProducts";

import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import useFilteredProducts from "../hooks/useFilteredProducts";
import "./ProductListPage.css";

const ProductListPage = () => {
  const { products, loading, error } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } = useFilteredProducts(products);



  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
   
      <main className="mainApp">
        <div className="search-container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <ProductList products={filteredProducts} />
      </main>
    </>
  );
};

export default ProductListPage;
