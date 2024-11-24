import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ initialValue = 1, stock, onAdd }) {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="count-container">
      <h1 className="count-display">{count}</h1>
      <div className="count-buttons">
        <button className="count-btn decrement-btn" onClick={decrement}>
          -
        </button>
        <button
          className="count-btn add-to-cart-btn"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
        <button className="count-btn increment-btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
