import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { Link, useLocation } from "react-router-dom";
import { useBreadCrumb } from "../hooks//useBreadCrumb";
import cartIcon from "../assets/icons/cart_icon.png";
import "./Header.css";

const Header = ({ cartCount, children }) => {
  const { breadcrumb } = useBreadCrumb();
  const { cartLength } = useCart();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  

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
          {pathnames.length === 2 && pathnames[0] === "product" && (
            <>
              <span> / </span>
              <span>{breadcrumb}</span>
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
