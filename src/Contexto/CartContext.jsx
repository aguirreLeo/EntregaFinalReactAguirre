import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const addItem = (productToAdd) => {
      console.log("Producto a agregar:", productToAdd);
      setCart((prevCart) => {
        if (isInCart(productToAdd.id)) {
          return prevCart.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + productToAdd.quantity }
              : item
          );
        } else {
          return [...prevCart, {  id: productToAdd.id,
                                  name: productToAdd.name,
                                  price: productToAdd.price,
                                  img: productToAdd.img, 
                                  quantity: productToAdd.quantity,
                                }
                ];
        }
      });
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    
    const removeItem = (id) =>{
        const cartUpdated = cart.filter( prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])    
    }
    
    const getTotal = () => {
      let accu = 0;
      cart.forEach((item) => {
        accu += item.quantity * item.price;
      });
      return accu;
    };

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach( produc => {
            accu += produc.quantity
        })
        return accu
    };
    
    

    
    const obj = {
      cart,
      isInCart,
      addItem,
      removeItem,
      clearCart,
      totalQuantity,
      getTotalQuantity,
      getTotal
    }; 
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}