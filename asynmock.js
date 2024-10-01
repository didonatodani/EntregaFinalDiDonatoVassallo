// const boneesProducts = [
//     {id: "1", name: "RAINBOW TEE", stock: 7, price: 32, size: "S", img: "../rainbowTee.png", idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
//     {id: "2", name: "IBIZA LILA TOTE BAG", stock: 4, price: 18, size: "S", img: "../ToteLila.jpg",  idCat: "bags", detail: "HAND PAINTED. Lilac. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
//     {id: "3", name: "BOX BONEES TEE", stock: 10, price: 38, size: "M", img: "../boneesBoxTee.png",  idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
//     {id: "4", name: "ACID BONEES SWEATSHIRT", stock: 7, price: 45, size: "M", img: "../sweat2.jpg",  idCat: "sweatshirts", detail: "HAND PAINTED. 100% Cotton, ACID WASHED FABRIC. Shell Fabric, Terry, 300g."},
//     {id: "5", name: "KOH LANTA TEE", stock: 4, price: 40, size: "L", img: "../kohLantaTee.png",  idCat: "tees", detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."},
//     {id: "6", name: "BONEES TOTT BAG", stock: 8, price: 16, size: "S", img: "../boneesTotBag.png",  idCat: "bags", detail: "HAND PAINTED. Black. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
//     {id: "7", name: "BONA SUDADERA SWEATSHIRT", stock: 10, price: 48, size: "L", img: "../sweat1.jpg",  idCat: "sweatshirts", detail: "HAND PAINTED. 100% Cotton, BLACK. Shell Fabric, Terry, 300g."},
//     {id: "8", name: "BONEES DIAS TEE", stock: 8, price: 35, size: "M", img: "../boneesDiasTee.png",  idCat: "tees",detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."}
// ];

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(boneesProducts)
        }, 2000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const product = boneesProducts.find (item => item.id === id)
            resolve(product)
        }, 500)
    })
}

export const getProductsByCat = (idCategory) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const product = boneesProducts.filter(item => item.idCat === idCategory)
            resolve(product)
        }, 500)
    })
}