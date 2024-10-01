import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item, quantity }) => {

    const { deleteProduct } = useContext(CartContext);

  return (
    <div>
        <h4>{item.name}</h4>
        <h4>Qty: {quantity}</h4>
        <h4>Price: {item.price} €</h4>
        <button onClick={()=>deleteProduct(item.id)}>Delete this product</button>
    </div>
  )
}

export default CartItem