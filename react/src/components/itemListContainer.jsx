import React from "react"
import ItemList from "./itemList"
// import itemsData from "../productos.json"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, getFirestore } from "firebase/firestore"

const ItemListContainer = () =>{
  const [items, setItems] = useState([])
  const {id} = useParams()
  // useEffect(()=>{
  //   const promesa = new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       resolve(id? itemsData.filter(item => item.category === id):itemsData)
  //     }, 2000);
  //   })
  //   promesa.then((data) =>{
  //     setItems(data)
  //   })
  // }, [id])
  useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db, "items")
    getDocs(itemCollection).then((snapshot)=>{
      // let a = snapshot.docs.filter(doc => doc.data().category === id)
      // id?setItems(...a):
      setItems(snapshot.docs.map((doc)=>({id:doc.id,key:doc.id, ...doc.data()})))
    })

  }, [])



  return(
    <div>
      <ItemList greeting={items}/>
    </div>
  )
}

export default ItemListContainer