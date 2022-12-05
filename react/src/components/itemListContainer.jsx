import React from "react"
import ItemList from "./itemList"
import itemsData from "../productos.json"
import { useState } from "react"
import { useEffect } from "react"

const ItemListContainer = () =>{
  const [items, setItems] = useState([])

  useEffect(()=>{
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(items)
      }, 2000);
    })
    promesa.then(itemsData);{
      setItems(itemsData)
    }
  })
return(
  <ItemList greeting={items}/>
)
}

export default ItemListContainer