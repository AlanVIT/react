import React from "react";
import ItemCount from "./itemCount";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";



const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext)
    const [stock, setStock] = useState(item.stock)

    console.log(item.stock)
    const onAdd = (quantity) => {
        setStock(stock-quantity)
        if(quantity > 0){
        addItem(item, quantity)
      }
    }
    useEffect(()=>{
        setStock(item.stock)    
    }, [item])
    return(
        <div id="cardStyle" className="card">
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h4 className="card-text">{item.price}$</h4>
                <p className="card-text">{item.owner}</p>
            </div>
        </div>
    )
}

export default ItemDetail