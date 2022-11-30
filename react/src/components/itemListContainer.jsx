import React from "react"
import ItemList from "./itemList"
import items from "../productos.json"

const ItemListContainer = () =>{
return(
  <ItemList greeting={items}/>
)
}

export default ItemListContainer