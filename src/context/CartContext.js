"use client";
import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState({ type: null, value: 0 }); // state for selecting discount

  // add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // product exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // product doesn't exist, add new entry with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const applyDiscount = (type, value) => {
    setDiscount({ type, value });
  };

  const removeDiscount = () => {
    setDiscount({ type: null, value: 0 });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCartQuantity,
        applyDiscount,
        removeDiscount,
        cart,
        discount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
