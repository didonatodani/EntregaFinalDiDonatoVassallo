import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {

    const {cart, total, totalQuantity, emptyCart} = useContext(CartContext);
    if (totalQuantity === 0){
        return(
            <div className="empty-cart">
                <h2>Your cart is empty! <br/>:(</h2>
                <Link to={"/allproducts"}>
                    <button>Go to Bonees Products &nbsp;&nbsp;:)</button>
                </Link>
            </div>
        )
    }
  return (
    <div className="cart">
        {
            cart.map(product =><CartItem key={product.item.id} {...product}/>)
        }

        <h3>Total: {total} €</h3>
        <h3>Items in cart: {totalQuantity}u</h3>
        <div className="cart-main-buttons">
            <button onClick={()=> emptyCart()} >Empty cart</button>
            <Link to={'/checkout'}>
                <button>Check Out</button>
            </Link>
        </div>
    </div>
  )
}

export default Cart