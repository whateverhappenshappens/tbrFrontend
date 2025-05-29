import React, { createContext, useContext, useEffect, useState } from "react";
import Course from "./page/Program-page/course-container/Course";

interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image:string
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [cart, setCart] = useState<Course[]>([]);

  const [cart, setCart] = useState<Course[]>(() => {
    // Load initial cart from local storage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  

  const addToCart = (course: Course) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, course];
      localStorage.setItem("cart", JSON.stringify(newCart)); // Update local storage
      return newCart;
    });
  };

  const removeFromCart = (courseId: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((course) => course.id !== courseId);
      localStorage.setItem("cart", JSON.stringify(newCart)); // Update local storage
      return newCart;
    });
  };

  useEffect(() => {
    // Optional: Sync local storage whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (course: Course) => {
  //   setCart((prevCart) => [...prevCart, course]);
  // };

  // const removeFromCart = (courseId: string) => {
  //   setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  // };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
