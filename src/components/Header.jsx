import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../assets/icons/cart_icon.png";
import "./Header.css";

const Header = ({ cartCount, children }) => {
  const { cartLength } = useCart();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const fetchProductName = async (id) => {
      try {
        const response = await fetch(
          `https://itx-frontend-test.onrender.com/api/product/${id}`
        );
        const data = await response.json();
        setProductName(data.model);
      } catch (error) {
        console.error("Error fetching product name:", error);
      }
    };

    if (pathnames[0] === "product" && pathnames[1]) {
      fetchProductName(pathnames[1]);
    }
  }, [pathnames]);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header-center">
            <h1>ShopOnline</h1>
          </div>
          <div className="header-right">
            <div className="cart-icon-container">
              <img src={cartIcon} alt="Cart Icon" className="icon cart-icon" />
              {cartCount > 0 && <div className="cart-count">{cartLength}</div>}
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            {pathnames[0] === "product" && productName && (
              <>
                <span> / </span>
                <span>{productName}</span>
              </>
            )}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
