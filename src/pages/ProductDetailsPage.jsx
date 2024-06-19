import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import Spinner from "../components/Spinner";
import { useCart } from "../hooks/useCart";
import { useBreadCrumb } from "../hooks/useBreadCrumb";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error } = useProductDetails(id);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const { updateBreadCrumb } = useBreadCrumb();

  useEffect(() => {
    if (product && product.options) {
      const { colors, storages } = product.options;
      if (colors.length === 1) {
        setSelectedColor(colors[0].code);
      }
      if (storages.length === 1) {
        setSelectedStorage(storages[0].code);
      }
    }
    if (product) {
      updateBreadCrumb(product.model); // Actualizar el breadcrumb con el nombre del producto
    }
  }, [product, updateBreadCrumb]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleStorageClick = (storage) => {
    setSelectedStorage(storage);
  };

  const handleAddToCart = () => {
    if (selectedColor && selectedStorage) {
      const productToAdd = {
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      };
      addToCart(productToAdd);
    } else {
      alert("Por favor seleccione un color y una capacidad");
    }
  };

  if (loading) {
    return <Spinner message={"Cargando Producto"} />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        <div className="product-image">
          <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
        </div>
        <div className="product-description">
          <h3>DESCRIPCIÓN</h3>
          <ul>
            <li>
              <strong>Marca:</strong> {product.brand}
            </li>
            <li>
              <strong>Modelo:</strong> {product.model}
            </li>
            <li>
              <strong>Precio:</strong> S/{product.price}
            </li>
            <li>
              <strong>CPU:</strong> {product.cpu}
            </li>
            <li>
              <strong>RAM:</strong> {product.ram}
            </li>
            <li>
              <strong>Sistema Operativo:</strong> {product.os}
            </li>
            <li>
              <strong>Resolución de pantalla:</strong>{" "}
              {product.displayResolution}
            </li>
            <li>
              <strong>Batería:</strong> {product.battery}
            </li>
            <li>
              <strong>Cámaras:</strong>{" "}
              {Array.isArray(product.primaryCamera)
                ? product.primaryCamera.join(", ")
                : product.primaryCamera}{" "}
              (Primaria),
              {Array.isArray(product.secondaryCamera)
                ? product.secondaryCamera.join(", ")
                : product.secondaryCamera}{" "}
              (Secundaria)
            </li>
            <li>
              <strong>Dimensiones:</strong> {product.dimentions}
            </li>
            <li>
              <strong>Peso:</strong> {product.weight} g
            </li>
          </ul>
        </div>
        <div className="product-options">
          <h3>Color</h3>
          <div className="options-grid">
            {product.options.colors.map((color) => (
              <button
                key={color.code}
                className={`option-button ${
                  selectedColor === color.code ? "selected" : ""
                }`}
                onClick={() => handleColorClick(color.code)}
              >
                {color.name}
              </button>
            ))}
          </div>
          <h3>Capacidad</h3>
          <div className="options-grid">
            {product.options.storages.map((storage) => (
              <button
                key={storage.code}
                className={`option-button ${
                  selectedStorage === storage.code ? "selected" : ""
                }`}
                onClick={() => handleStorageClick(storage.code)}
              >
                {storage.name}
              </button>
            ))}
          </div>
          {selectedColor && selectedStorage && (
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
