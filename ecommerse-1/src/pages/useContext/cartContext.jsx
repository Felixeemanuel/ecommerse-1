import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
      });

//   useEffect(() => {
//     const saved = localStorage.getItem('cart');
//     if (saved) {
//       setCartItems(JSON.parse(saved));
//     }
//   }, []);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log('Cart updated:', cartItems);
    console.log(cartItems.length)
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev =>
      prev.find(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { ...product, quantity: 1 }]
    );
    console.log('Product added to cart:', product);
  console.log('Current cart items:', cartItems);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);