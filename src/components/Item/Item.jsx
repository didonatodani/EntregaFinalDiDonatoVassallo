import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, price, img}) => {
  return (
    <div className="cardProducts">
        <img src={img} alt={name} />
        <Link to={`/item/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{price} €</p>
    </div>
  )
}

export default Item