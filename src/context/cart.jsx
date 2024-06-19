import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const now = new Date();
      if (now.getTime() - parsedCart.timestamp < 3600000) { // 1 hora en milisegundos
        return parsedCart.data;
      }
    }
    return [];
  });

  const [lastProduct, setLastProduct] = useState(null);
  const [cartLength, setCartLength] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const now = new Date();
      if (now.getTime() - parsedCart.timestamp < 3600000) { // 1 hora en milisegundos
        return parsedCart.data.length;
      }
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ data: cart, timestamp: new Date().getTime() }));
    setCartLength(cart.length);
  }, [cart]);

  const addToCart = async (product) => {
    try {
      const response = await fetch("https://itx-frontend-test.onrender.com/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Error al añadir el producto al carrito');
      }
      const result = await response.json();

      setCart((prevState) => {
        const updatedCart = [...prevState];
        const productIndex = updatedCart.findIndex(item => item.id === product.id && item.colorCode === product.colorCode && item.storageCode === product.storageCode);
        
        if (productIndex !== -1) {
          // Si el producto ya está en el carrito, actualiza su cantidad
          updatedCart[productIndex].count = result.count;
        } else {
          // Si el producto no está en el carrito, añádelo
          updatedCart.push({
            ...product,
            count: result.count,
          });
        }
        return updatedCart;
      });

      setLastProduct(product);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setCartLength(0);
  };

  return (
    <CartContext.Provider value={{ cart, lastProduct, cartLength, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
