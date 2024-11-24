import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ name, img, description, category, price, stock }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (cantidad) => {
    setQuantity(cantidad);
  };

  return (
    <div className="detail-container">
      <h2 className="detail-title">{name}</h2>
      <div className="detail-card">
        <img
          src={img}
          className="detail-card-img"
          alt={name}
        />
        <div className="detail-card-body">
          <p className="detail-description">{description}</p>
          <p className="detail-category">Categoría: {category}</p>
          <h2 className="detail-price">Precio: $ {price}</h2>
          <h2 className="detail-stock">Disponible: {stock}</h2>
        </div>
      </div>

      <div className="detail-actions">
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <Link to="/cart" className="detail-finish-button">
            Finalizar Compra
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
