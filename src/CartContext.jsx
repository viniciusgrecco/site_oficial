import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      // Atualiza a quantidade se o item já estiver no carrinho
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantidade: cartItem.quantidade + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // Adiciona um novo item com quantidade 1
      setCartItems([...cartItems, { ...item, quantidade: 1 }]);
    }
  };

  const updateCartItem = (id, newItem) => {
    setCartItems(cartItems.map(item => item.id === id ? newItem : item));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, clearCart, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};
