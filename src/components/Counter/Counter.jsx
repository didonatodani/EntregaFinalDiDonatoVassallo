import { useState } from "react"

const Counter = ({initial, stock, addToCart}) => {

    const [counter, setCounter] = useState (initial)

    const add = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }

    const substract = () =>{
        if (counter > 1){
            setCounter (counter -1)
        }
    }

  return (
    <>
        <div className="counter-div">
            <button onClick={substract}>-</button>
            <strong>{counter}</strong>
            <button onClick={add}>+</button>
        </div>
        <button onClick={()=>addToCart(counter)}>Add to cart</button>
    </>
  )
}

export default Counter