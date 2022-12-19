import React from "react";
import Item from "./item"; 


const ItemList = ({greeting}) =>{
   let prods = greeting.map(producto =>
        <Item item={producto} key={producto.index}/>
    )
    return (
      <div id="cardContainer">{prods}</div>
      )
}

export default ItemList;

