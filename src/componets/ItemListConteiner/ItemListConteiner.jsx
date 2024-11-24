import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, QuerySnapshot, where } from "firebase/firestore" 
import { db } from "../../services/Firebase/config.js"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const collectionRef = categoryId 
        ? query(collection(db, "productos"), where("category", "==", categoryId))
        : collection(db, "productos");

        getDocs(collectionRef)
        .then((querySnapshot) => {
          const productos = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          setProducts(productos)
        })
        .catch((error) => {
          console.log(error)
        })
        
    }, [categoryId])
  return (
    <>
        <h2>{greetings}</h2>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer