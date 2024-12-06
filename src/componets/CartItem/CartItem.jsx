import { useCart } from "../../hooks/useCart";
import "./CartItem.css";

export default function CartItem({ id, img, name, quantity, price }) {
  const { removeItem } = useCart();

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <article className="cart-item-card">
      <header className="cart-item-header">
        <h2 className="cart-item-name">{name}</h2>
      </header>
      <section className="cart-item-body">
        <img src={img} alt={name} className="cart-item-img" />
        <div className="cart-item-details">
          <p className="cart-item-info">Cantidad: {quantity}</p>
          <p className="cart-item-info">Precio x unidad: $ {price}</p>
        </div>
      </section>
      <footer className="cart-item-footer">
        <p className="cart-item-subtotal">Subtotal: $ {price * quantity}</p>
        <button
          className="remove-item-btn"
          onClick={() => handleRemove(id)}
        >
          ❌
        </button>
      </footer>
    </article>
  );
}
