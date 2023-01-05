import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const ItemCount = ({itemStock, onAdd}) =>{
    const [counter, setCounter] = useState(1)
    const [stock, setStock] = useState(itemStock)
    const [sold, setSold] = useState(false)
    const decrement = () =>{
        if(counter > 1){
            setCounter(counter - 1)
        }
        else{
            alert("queres -1 productos?")
        }
    }

    const increment = () =>{
        if(counter < stock){
            setCounter(counter + 1)
        }
        else{
            alert("No hay mas stock pa, espere un rato que recargamos")
        }
    }

    const addToCart = (quantity) => {
        setCounter(0)
        setStock(stock-quantity)
        setSold(true)
        onAdd(quantity)
    }

    return(
        <div id="counter" className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <span>
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <br />
                {sold?<Link to={"/cart"} className="btn btn-primary">terminar la compra</Link>: 
                <button onClick={() => addToCart(counter)} className="btn btn-primary">Agregar al carrito</button>}
                
            </span>
        </div>    )
}

export default ItemCount