import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";


const Item = ({title, price, owner, id, stock}) => {
  return(
    <div id="cardStyle" className="card ">
    <div className="card-body">
      <Link to={"/productos/" + id} className="text-decoration-none text-reset">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-text">{price}$</h4>
        <p className="card-text">{owner}</p>
      </Link>
      <ItemCount id={id} stock={stock} />

    </div>
  </div>
  )
}

export default Item;

