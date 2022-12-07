import React from "react"
import ItemList from "./itemList"
import itemsData from "../productos.json"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{
  const [items, setItems] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(id? itemsData.filter(item => item.category === id):itemsData)
      }, 1000);
    })
    promesa.then((data) =>{
      setItems(data)
    })
  }, [id])

return(
  <div>
    <ItemList greeting={items}/>
  </div>
)
}

export default ItemListContainer