import React from "react";
import { useState } from "react";
import { addToCart} from "./cart";


const ItemCount = ({id ,stock}) =>{
    const [counter, setCounter] = useState(0)
    const decrement = () =>{
        if(counter!==0){
        setCounter(counter-1)
    }
    else{alert("queres -1 productos?")}
    } 
    const increment = () =>{
        if(counter < stock){
        setCounter(counter+1)
    }
    else{
        alert("No hay mas stock pa, espere un rato que recargamos")
    }
    } 
    return(
        <div id="counter" className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <span>
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <br />
                <button onClick={() => addToCart(id, counter)} className="btn btn-primary">Agregar al carrito</button>
            </span>
        </div>    )
}

export default ItemCount