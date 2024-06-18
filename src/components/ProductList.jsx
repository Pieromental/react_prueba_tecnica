import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
          <h2>{product.brand} - {product.model}</h2>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;