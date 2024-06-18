import useProducts from "../hooks/useProducts";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import "./ProductListPage.css";

const ProductListPage = () => {
  const { products, loading, error } = useProducts();
  const cartCount = 1; // Cambia esto según tu lógica de estado

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="mainApp">
        <ProductList products={products} />
      </main>
    </>
  );
};

export default ProductListPage;