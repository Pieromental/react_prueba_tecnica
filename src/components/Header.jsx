import cartIcon from "../assets/icons/cart_icon.png";
import "./Header.css";

const Header = ({ cartCount  }) => {
  return (
    <header className="header">
   
      <div className="header-center">
        <h1>ShopOnline</h1>
      </div>
      <div className="header-right">
        <div className="cart-icon-container">
          <img src={cartIcon} alt="Cart Icon" className="icon cart-icon" />
          {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
