import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { CartProvider } from "./context/cart";
import Header from "./components/Header";

function App() {
  const cartCount = 1;
  return (
    <CartProvider>
      <Router>
        <Header cartCount={cartCount}>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </Header>
      </Router>
    </CartProvider>
  );
}

export default App;
