import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({childrean}) => {

    const [cart, setCart] = useState([]);
    const isInCart = () => {};
    const addItem = () => {};
    const totalQuantity = () => {};
    const removeItem = () => {};

    const obj = {
        cart, isInCart, addItem, totalQuantity, removeItem, setCart
    }

    return (
        <CartContext.Provider value={obj}>
            {childrean}
        </CartContext.Provider>
    )
}