import "./CartItem.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({item, quantity}) => {

    const { increaseQuantity, decreaseQuantity, deleteProduct } = useContext(CartContext);

  return (
    <div>
        <h4>{item.name}</h4>
        <img src={item.img} alt={item.name} className="cartItemImg"/>
        <h4>{item.price}€</h4>
        <div className="quantity-control">
            <button onClick={() =>decreaseQuantity(item.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>increaseQuantity(item.id)}>+</button>
        </div>
        <button onClick={()=>deleteProduct(item.id)}>
          <img className="delete-icon" src="../delete.png" alt="delete icon"/>
        </button>
    </div>
  )
}

export default CartItem