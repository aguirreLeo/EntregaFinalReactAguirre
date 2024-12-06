import "./Checkout.css";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { db } from "../../services/Firebase/config";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

export default function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [direccion, setDireccion] = useState("");

  const [orderCreated, setOrderCreated] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const createOrder = async (e) => {
    e.preventDefault();

    if (!totalQuantity || totalQuantity <= 0) {
      setError("No hay productos en el carrito.");
      return;
    }

    // Validar que los campos del comprador no estén vacíos
    if (!nombre || !apellido || !phone || !direccion) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Estructura de la orden
    const objOrder = {
      buyer: {
        firstName: nombre,
        lastName: apellido,
        phone: phone,
        address: direccion,
      },
      items: cart,
      totalQuantity,
      total,
      date: new Date(),
    };

    // Imprimir el objeto objOrder para depuración
    console.log("Objeto de la orden antes de enviarlo a Firebase:", objOrder);

    const ids = cart.map((item) => item.id);
    const productRef = collection(db, "products");

    try {
      // Obtener productos de Firebase
      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;
      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        // Encontrar el producto agregado al carrito
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      // Si no hay productos fuera de stock, confirmamos la orden
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");

        // Verificar que los datos de la orden son correctos antes de enviarlos
        if (
          objOrder.buyer.firstName &&
          objOrder.buyer.lastName &&
          objOrder.buyer.phone &&
          objOrder.buyer.address &&
          objOrder.items.length > 0
        ) {
          const orderAdded = await addDoc(orderRef, objOrder);
          setOrderId(orderAdded.id);
          clearCart();
          setOrderCreated(true);
        } else {
          setError("Datos de la orden incompletos.");
        }
      } else {
        setError("Algunos productos no están disponibles en el stock.");
      }
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setError("Hubo un error al procesar tu orden.");
    }
  };

  if (orderCreated) {
    return (
      <div className="order-confirmation">
        <h1>¡Orden creada exitosamente!</h1>
        <p>El ID de tu orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={createOrder} className="checkout-form">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label>Apellido</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <label>Teléfono</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Dirección</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Generar Orden
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
