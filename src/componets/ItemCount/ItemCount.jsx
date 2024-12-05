import "./ItemCount.css";
import useCounter from "../../hooks/useCount";

function ItemCount({ initialValue = 1, stock, onAdd }) {
  const { increment, decrement, valor: count } = useCounter(initialValue);

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count); // Llama a la función proporcionada por el padre
    } else {
      alert("Cantidad inválida");
    }
  };

  return (
    <div className="count-container">
      <h1 className="count-display">{count}</h1>
      <div className="count-buttons">
        <button
          className="count-btn decrement-btn"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <button className="count-btn add-to-cart-btn" onClick={handleAdd}>
          Agregar al carrito
        </button>
        <button
          className="count-btn increment-btn"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
