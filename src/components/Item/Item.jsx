import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, price, img}) => {
  return (
    <div className="cardProducts">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>Price: {price} €</p>
        <Link to={`/item/${id}`}>See more...</Link>
    </div>
  )
}

export default Item