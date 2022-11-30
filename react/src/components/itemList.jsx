import React from "react";
import Item from "./item";



const ItemList = ({greeting}) =>{
   let prods = greeting.map(producto =>
        <Item title={producto.title} price={producto.price} owner={producto.owner} id={producto.index}/>
    )
    return (
      <div id="cardContainer">{prods}</div>
      )
}

export default ItemList;

