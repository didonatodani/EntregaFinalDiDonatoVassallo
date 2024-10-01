import Swal from 'sweetalert2'
import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
});

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart);

    const addToCart = (item, quantity) =>{
        const existingProduct = cart.find((prod) => prod.item.id === item.id);
        
        if (!existingProduct) {
            setCart((prev) => [...prev, { item, quantity }]);
            setTotalQuantity((prev) => prev + quantity);
            setTotal((prev) => prev + (item.price * quantity));
        } else {
            const updatedCart = cart.map((prod) =>{
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity};
                } else{
                    return prod;
                }
            });
            setCart(updatedCart);
            setTotalQuantity((prev) => prev + quantity);
            setTotal((prev) => prev + (item.price * quantity));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find((prod) => prod.item.id === id)
        const updatedCart = cart.filter((prod) => prod.item.id !== id)

        setCart(updatedCart)
        setTotalQuantity((prev) => prev - deletedProduct.quantity)
        setTotal(
            (prev) => 
                prev - (deletedProduct.item.price * deletedProduct.quantity
            ));
    };

    const emptyCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your items have been deleted.",
                icon: "success"
            });
            setCart([]);
            setTotalQuantity(0);
            setTotal(0);
            }
          });
        
    };

    const emptyCartBuying = () => {
            setCart([]);
            setTotalQuantity(0);
            setTotal(0);
            }

    return (
        <CartContext.Provider value={{cart, total, totalQuantity, addToCart, deleteProduct, emptyCart, emptyCartBuying}}>
            {children}
        </CartContext.Provider>
    )
}
