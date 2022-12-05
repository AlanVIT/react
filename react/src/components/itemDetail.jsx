import React from "react";
import ItemCount from "./itemCount";

const ItemDetail = ({item}) =>{
    return(
        <div id="cardStyle" className="card">
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h4 className="card-text">{item.price}$</h4>
                <p className="card-text">{item.owner}</p>
                <ItemCount id={item.id} stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail