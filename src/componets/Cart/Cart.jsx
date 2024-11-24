import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
        <h4>Carrito de compras</h4>
        <ul>
            <li>producto1</li>
            <li>producto1</li>
            <li>producto1</li>
            <li>producto1</li>
        </ul>
        <Link to={'/checkout'}>Finalizar Compra</Link>
    </div>
  )
}

