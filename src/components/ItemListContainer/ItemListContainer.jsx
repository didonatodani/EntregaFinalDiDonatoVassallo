import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {idCategory} = useParams ()

    useEffect(()=> {
      const boneesProducts = idCategory ? query(collection(db, "products"), where("idCat", "==", idCategory)) : (collection(db,"products"))

      getDocs(boneesProducts)
      .then (res => {
          const newProducts = res.docs.map(doc =>{
              const data = doc.data()
              return {id:doc.id , ...data}
          })
          setProducts(newProducts)
      })
      .catch(error => console.log(error))
      .finally(()=>{
          console.log("finished process")
      })
  }, [idCategory])

  return (
    <>
      <h2 className="productsTitle">BONEES PRODUCTS</h2>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer