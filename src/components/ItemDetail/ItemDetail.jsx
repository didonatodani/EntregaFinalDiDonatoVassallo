import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { useContext } from "react";
import { toast } from "react-toastify"

const ItemDetail = ({id, name, price, size, img, detail, stock}) => {

  const [addQuantity, setAddQuantity] = useState(0)

  const {addToCart} = useContext(CartContext)

  const quantityHandler = (quantity) =>{

    setAddQuantity(quantity)
    const item = {id, name, price, img, stock}
    addToCart(item, quantity)
    toast.info('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
 
  return (
    <div className="itemDetail">
        <img src={img} alt={name}/>
        <div className="detailText">
          <h2>{name}</h2>
          <p>{price} €</p>
          <p>Size: {size}</p>
          <p>{detail}</p>
          {
            addQuantity > 0 ? (<Link to="/cart">Go to cart</Link>) : ( stock != 0 ? <Counter initial={1} stock={stock} addToCart={quantityHandler}/> : <strong>Out of stock</strong>)
          }
          <Link to={-1}>Back</Link>
        </div>
    </div>
  )
} 
export default ItemDetail