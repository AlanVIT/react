import React from "react";
import Item from "./item";

const CartList = (array) =>{
    let prods = array.map(producto =>
        <Item key={producto.index} title={producto.title} price={producto.price} owner={producto.owner} id={producto.index}/>)
    return(
        <div>{prods}</div>
    )
}
export default CartList