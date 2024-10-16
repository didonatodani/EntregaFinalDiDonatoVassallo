import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity }) => {
  const { increaseQuantity, decreaseQuantity, deleteProduct } =
    useContext(CartContext);

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        
        <img src={item.img} alt={item.name} className="cart-item-img" />
        <h4>{item.name}</h4>
        <h4>{item.price}€</h4>
      </div>
      <div className="cart-buttons">
        <div className="quantity-control">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <button onClick={() => deleteProduct(item.id)}>
          <img className="delete-icon" src="../delete.png" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
