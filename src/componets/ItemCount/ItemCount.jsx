import "./ItemCount.css";
import useCounter from "../../hooks/useCount";

function ItemCount({ initialValue = 1, stock, onAdd }) {
  const { increment, decrement, valor: count } = useCounter(initialValue);

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count); 
    } else {
      alert("Cantidad inválida");
    }
  };

  return (
    <div className="item-count-container">
  <h1 className="item-count-display">{count}</h1>
  <div className="item-count-buttons">
    <button
      className="item-count-btn item-decrement-btn"
      onClick={decrement}
      disabled={count <= 1}
    >
      -
    </button>
    <button
      className="item-count-btn item-add-to-cart-btn"
      onClick={handleAdd}
    >
      Agregar al carrito
    </button>
    <button
      className="item-count-btn item-increment-btn"
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
