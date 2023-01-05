import React from "react";
import {getDoc ,addDoc, getFirestore, collection} from "firebase/firestore"
import { useState } from "react";

// "title":"Intel 9",
// "price":5000,
// "stock":10,
// "category":"procesadores",
// "owner":"Alan vitas",

let id

const Publish = () =>{
    const [owner, setOwner] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [title, setTitle] = useState("")

    const generarItem = () => {
        const item = {
            index: id,
            title:  title,
            price:  price,
            stock:  stock, 
            category: "otros",
            owner:owner,
            img:""
        }
        const db = getFirestore()
        const orderCollection = collection(db, "items")
        addDoc(orderCollection, item)
    }

    return(
        <form>
            <input className="mb-3" onInput={(e)=>setOwner(e.target.value)} type="text" required placeholder={"Tu nombre"}/>
            <input className="mb-3" onInput={(e)=>setTitle(e.target.value)} type="mail" required placeholder={"El nombre del producto"}/>
            <input className="mb-3" onInput={(e)=>setStock(e.target.value)} type="number" required placeholder={"El stock del producto"}/>
            <input className="mb-3" onInput={(e)=>setPrice(e.target.value)} type="number" required placeholder={"El precio del producto"}/>

            <button type="button" onClick={generarItem}>generar item</button>
        </form>
    )

}
export default Publish