import React from "react"
import ItemList from "./itemList"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, getFirestore, where, query } from "firebase/firestore"

const ItemListContainer = () =>{
  const [items, setItems] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const db = getFirestore()

    const itemCollection = id? 
    query(
      collection(db, "items"),
      where("category", "==", id), 
      where("stock", ">", 0)
    ) : 
    query(
      collection(db, "items"),
      where("stock", ">", 0)
    ) 
    getDocs(itemCollection).then((snapshot)=>{
      if(snapshot.size === 0 ){
        alert('no hay resultados')
      }
      setItems(snapshot.docs.map((doc)=>({id:doc.id, key:doc.id, ...doc.data()})))
    })

  }, [])



  return(
    <div>
      <ItemList greeting={items}/>
    </div>
  )
}

export default ItemListContainer