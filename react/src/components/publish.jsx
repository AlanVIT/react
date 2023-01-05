import React from "react";
import { addDoc, getDocs, collection, getFirestore, where, query } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"

const Publish = () =>{

    const [index, setIndex] = useState("") 
    const [owner, setOwner] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [title, setTitle] = useState("")
    useEffect(()=>{
        const db = getFirestore()
    
        const itemCollection =  collection(db, "items") 
        getDocs(itemCollection).then((snapshot)=>{
            let biggerId = 0
            snapshot.docs.map((item) => biggerId < item.data().index?biggerId=item.data().index:biggerId=biggerId)
            setIndex(biggerId)
        })
    
    }, [])



    const generarItem = () => {
        const item = {
            index: index + 1,
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