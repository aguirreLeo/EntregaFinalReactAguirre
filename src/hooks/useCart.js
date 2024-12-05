import { useContext } from "react"
import { CartContext } from "../Contexto/CartContext"


export const useCart = () => {
    return useContext(CartContext)
}