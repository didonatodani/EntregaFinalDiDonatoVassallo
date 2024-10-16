import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
      <div className="cart-div">
          {
          totalQuantity > 0 && <strong className="cart-num">{totalQuantity}</strong>
          }

          <Link to={"/cart"}>
            <img className="img-carrito" src="../cart.png" alt="cart icon"/>
          </Link>
      </div>
  )
}

export default CartWidget

