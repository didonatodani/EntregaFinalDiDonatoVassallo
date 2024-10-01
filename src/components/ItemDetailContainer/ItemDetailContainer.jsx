import { useState , useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {idItem} = useParams();

  useEffect(()=>{
    const newDoc = doc(db, "products", idItem)

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProduct = {id: res.id,...data}
        setProduct(newProduct)
      })
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product}/>
    </div>
  )
  
}

export default ItemDetailContainer