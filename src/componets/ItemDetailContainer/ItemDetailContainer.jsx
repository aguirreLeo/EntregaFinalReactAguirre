
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {getProductByID} from '../../asyncMock.js'
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import { db } from "../../services/Firebase/config.js";
function ItemDetailContainer() {
  const [product, setProduct] = useState(null); // Comienza como null hasta que se obtengan los datos
  const [loader, setLoader] = useState(false);
  const {productId} = useParams();

  useEffect(() => {
    setLoader(true);

    getDoc(doc(db, 'productos', productId))
    .then((querySnapshot) => {
      const prod = {
        id: querySnapshot.id,
        ...querySnapshot.data()
      }
      setProduct(prod)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoader(false)
    })
    
  }, [productId]); // Dependencia para ejecutar cada vez que cambie el ID

  // Si el producto no se ha cargado, muestra un cargando
  
  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;