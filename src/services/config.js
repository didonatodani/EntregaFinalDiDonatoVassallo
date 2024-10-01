import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCh5pq8V59OIWZ7zDJ4Tiu7Rwzh7wvuHGI",
  authDomain: "bonees-shop.firebaseapp.com",
  projectId: "bonees-shop",
  storageBucket: "bonees-shop.appspot.com",
  messagingSenderId: "480891214942",
  appId: "1:480891214942:web:b545af1dd74598c3e028cf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Mi array de productos:

// const boneesProducts = [
//     {name: "RAINBOW TEE", stock: 7, price: 32, size: "S", img: "../rainbowTee.png", idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
//     {name: "IBIZA LILA TOTE BAG", stock: 4, price: 18, size: "S", img: "../ToteLila.jpg",  idCat: "bags", detail: "HAND PAINTED. Lilac. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
//     {name: "BOX BONEES TEE", stock: 10, price: 38, size: "M", img: "../boneesBoxTee.png",  idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
//     {name: "BONA SUDADERA SWEATSHIRT", stock: 10, price: 48, size: "L", img: "../sweat1.jpg",  idCat: "sweatshirts", detail: "HAND PAINTED. 100% Cotton, BLACK. Shell Fabric, Terry, 300g."},
//     {name: "KOH LANTA TEE", stock: 4, price: 40, size: "L", img: "../kohLantaTee.png",  idCat: "tees", detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."},
//     {name: "BONEES TOTT BAG", stock: 8, price: 16, size: "S", img: "../boneesTotBag.png",  idCat: "bags", detail: "HAND PAINTED. Black. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
//     {name: "ACID BONEES SWEATSHIRT", stock: 7, price: 45, size: "M", img: "../sweat2.jpg",  idCat: "sweatshirts", detail: "HAND PAINTED. 100% Cotton, ACID WASHED FABRIC. Shell Fabric, Terry, 300g."},
//     {name: "BONEES DIAS TEE", stock: 8, price: 35, size: "M", img: "../boneesDiasTee.png",  idCat: "tees",detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."}
// ];

// // // IMPORTACIÓN DE PRODUCTOS A FIREBASE:

// import {collection, doc, writeBatch} from "firebase/firestore"

// const uploadProducts = async () => {
//     const batch = writeBatch(db)
//     const productsRef = collection(db, "products")

//     boneesProducts.forEach((product)=>{
//         const newDoc = doc(productsRef)
//         batch.set(newDoc, product)
//     });

//     try {
//         await batch.commit();
//         console.log("Successful uploading")
//     } catch(error) {
//         console.log("Error uploading products ", error)
//     }

// };

// uploadProducts();