import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/ProductListPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
   
      </Routes>
    </Router>
  );
}

export default App; 