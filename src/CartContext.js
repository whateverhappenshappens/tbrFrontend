import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (course) => {
        setCart((prevCart) => [...prevCart, course]);
    };
    const removeFromCart = (courseId) => {
        setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
    };
    return (_jsx(CartContext.Provider, { value: { cart, addToCart, removeFromCart }, children: children }));
};
// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
