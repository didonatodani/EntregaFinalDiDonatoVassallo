import { useState, useContext } from "react";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const { cart, emptyCartBuying, total, totalQuantity } =
    useContext(CartContext);

  const formHandler = (event) => {
    event.preventDefault();

    if (!name || !surName || !phone || !email || !emailConfirmation) {
      setError("Please, complete all the blanks to confirm your order");
      return;
    }

    if (email !== emailConfirmation) {
      setError("The email address does not match the primary address");
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      surName,
      phone,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(productRef);
        const updatedStock = productDoc.data().stock;
        await updateDoc(productRef, {
          stock: updatedStock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            setName("");
            setSurName("");
            setPhone("");
            setEmail("");
            setEmailConfirmation("");
            setError("");
            emptyCartBuying();
          })
          .catch((error) => {
            console.log("Error when creating order", error);
            setError("Error when creating order");
          });
      })
      .catch((error) => {
        console.log("Stock could not be updated", error);
        setError("Error in stock. Try again later.");
      });
  };

  return (
    <>
      <h2>BONEES CHECK OUT</h2>

      {
        totalQuantity != 0 || orderId ? (

            orderId ? (
                <h3>THANK YOU FOR BUYING BONEES! Your order ID is: {orderId}</h3>
            ) : (
                <form onSubmit={formHandler}>

                    { cart.map((product) => (

                        <div key={product.item.id}>
                            <p>{product.item.name}</p>
                            <p>{product.item.price}€ x {product.quantity}</p>
                            <p>{product.item.price}€</p>
                        </div>
                    ))}

                    <div>
                        <label htmlFor="name">NAME:</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div>
                        <label htmlFor="surName">SURNAME:</label>
                        <input type="text" id="surName" onChange={(e) => setSurName(e.target.value)} value={surName}/>
                    </div>
                    <div>
                        <label htmlFor="phone">PHONE:</label>
                        <input type="number" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL:</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="emailConfirmation">CONFIRM EMAIL:</label>
                        <input type="email" id="emailConfirmation" onChange={(e) => setEmailConfirmation(e.target.value)} value={emailConfirmation}/>
                    </div>
                    <div>
                        {error && <h3>{error}</h3>}
                        <button type="submit">CONFIRM ORDER</button>
                    </div>
                </form>
            )): (
            <Link to={"/"}>Go and check our products!</Link>
        )}
    </>
  );
};

export default CheckOut;
