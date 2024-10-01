import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {

    const {cart, total, totalQuantity, emptyCart} = useContext(CartContext);
    if (totalQuantity === 0){
        return(
            <div className="emptyCart">
                <h2>Cart is empty!</h2>
                <Link to={"/"}>CHECK PRODUCTS AGAIN &nbsp;&nbsp;:)</Link>
            </div>
        )
    }
  return (
    <div>
        {
            cart.map(product =><CartItem key={product.item.id} {...product}/>)
        }

        <h3>Total: {total} €</h3>
        <h3>Total Qty: {totalQuantity} u</h3>
        <button onClick={()=> emptyCart()}>empty cart</button>
        <Link to={'/checkout'}>Check Out</Link>

    </div>
  )
}

export default Cart