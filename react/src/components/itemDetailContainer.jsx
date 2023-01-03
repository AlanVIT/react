import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail";
import itemData from "../productos.json"
import { useParams } from "react-router-dom";
import Document from "../firebase/document";
import Loading from "./Loading" 
const ItemDetailContainer = () =>{

    const [item, setItem] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve(itemData.find(item => item.index === parseInt(id)))
        }, 2000);
      })
      
      promesa.then(item);{
        setItem(itemData.find(item => item.index === parseInt(id)))
      }
    })
    
    return (
        <div>
          {loading? <Loading/>:<ItemDetail item={item}/>}          
        </div>
        )
}

export default ItemDetailContainer