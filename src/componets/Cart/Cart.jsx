import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

export default function Cart() {
  const { cart, clearCart, getTotal, getTotalQuantity } = useCart();

  const total = getTotal();
  const totalQuantity = getTotalQuantity();

  if (totalQuantity === 0) {
    return <h1 className="empty-cart">No hay items en el carrito</h1>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      <div className="cart-items">
        {cart.map((item) => {
          console.log("Item en el carrito:", item); 
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <h2 className="cart-total">Total: ${total}</h2>
      <div className="cart-actions">
        <button onClick={clearCart} className="clear-cart-btn">
          Limpiar Carrito
        </button>
        <Link to="/checkout" className="checkout-btn">
          Checkout
        </Link>
      </div>
    </div>
  );
}

