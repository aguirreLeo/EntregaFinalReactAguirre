
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {getProductByID} from '../asyncMock.js'
import ItemDetail from "./ItemDetail.jsx"
function ItemDetailContainer() {
  const [product, setProduct] = useState(null); // Comienza como null hasta que se obtengan los datos

  const {productId} = useParams();

  useEffect(() => {
    getProductByID(productId)
      .then((res) => {
        setProduct(res); // Guarda el producto en el estado
      })
      .catch((error) => {
        console.log(error); // Si ocurre un error
      });
  }, [productId]); // Dependencia para ejecutar cada vez que cambie el ID

  // Si el producto no se ha cargado, muestra un cargando
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;