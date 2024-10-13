import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cartDiv">
        {
        totalQuantity > 0 && <strong>{totalQuantity}</strong>
        }

        <Link to={"/cart"}>
          <img className={`img-carrito ${totalQuantity > 0 ? 'valid' : ''}`} src="../cart.png" alt="cart icon"/>
        </Link>
    </div>
  )
}

export default CartWidget