import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, price, img}) => {
  return (
    <div className="cardProducts">
        <Link to={`/item/${id}`}>
          <div className="img-overflow">
            <img src={img} alt={name}/>
          </div>
          <h3>{name}</h3>
        </Link>
        <p>{price} €</p>
    </div>
  )
}

export default Item