import React, {useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";



const Item = ({item}) => {
  const {addItem} = useContext(CartContext)
  const [stock, setStock] = useState(0)

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
    <div id="cardStyle" className="card ">
    <div className="card-body">
      <Link to={"/productos/" + item.index} className="text-decoration-none text-reset">
        <h2 className="card-title">{item.title}</h2>
        <h4 className="card-text">{item.price}$</h4>
        <p className="card-text">{item.owner}</p>
      </Link>
      <ItemCount itemStock={item.stock} onAdd={onAdd}/>

    </div>
  </div>
  )
}

export default Item;

