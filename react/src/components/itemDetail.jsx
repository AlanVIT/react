import React from "react";
import ItemCount from "./itemCount";
import { useState, useEffect } from "react";


const ItemDetail = ({item}) =>{

    const [stock, setStock] = useState(0)

    const onAdd = (quantity) => {
        setStock(stock-quantity) 
    }

    useEffect(()=>{
        setStock(item.stock)    
    }, [item])

    // console.warn(item)

    return(
        <div id="cardStyle" className="card">
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h4 className="card-text">{item.price}$</h4>
                <p className="card-text">{item.owner}</p>
                <ItemCount itemStock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail