import useProducts from "../hooks/useProducts";
import Header from "../components/Header";

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
     
    </>
  );
};

export default ProductListPage;