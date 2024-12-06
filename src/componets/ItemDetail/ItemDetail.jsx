import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


function ItemDetail({id, name, img, description, category, price, stock }) {
  
  const { addItem, isInCart } = useCart();
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
  }

  return (
    <div className="item-detail-container">
  <h2 className="item-detail-title">{name}</h2>
  <div className="item-detail-card">
    <img
      src={img}
      className="item-detail-img"
      alt={name}
    />
    <div className="item-detail-body">
      <p className="item-detail-text">{description}</p>
      <p className="item-detail-text">Categoria: {category}</p>
      <h2 className="item-detail-price">Precio: $ {price}</h2>
      <h2 className="item-detail-stock">Disponible - {stock}</h2>
    </div>
  </div>

  {
    isInCart(id) ? (
      <Link to="/cart" className="item-detail-link">Ir al carrito</Link>
    ) :
    (
      <ItemCount stock={stock} onAdd={ handleAdd } />
    )
  }
</div>

  );
}

export default ItemDetail
