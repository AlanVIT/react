import React from "react";
import items from "../productos.json"

let arrayPrds = []
let found = ""

function addToCart(id) {
  found = items.find(element => element.index === id);
  arrayPrds.push(found)
  console.table(arrayPrds)
};

const Item = ({title, price, owner, id}) => {

  return(
    <div id="cardStyle" className="card" >
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h4 className="card-text">{price}$</h4>
      <p className="card-text">{owner}</p>
      <button onClick={addToCart(id)} className="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>
  )
}

export default Item;