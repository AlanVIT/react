import React from "react";
import data from "../productos.json"
import Item from "./item"

const Category= ({id}) =>{

    let array = data.filter(item => item.category === id)

    let prods = array.map(producto =>
        <Item stock={producto.stock} key={producto.index} title={producto.title} price={producto.price} owner={producto.owner} id={producto.index}/>
    )

        return(
            <div id="cardContainer">{prods}</div>
        )
}

export default Category