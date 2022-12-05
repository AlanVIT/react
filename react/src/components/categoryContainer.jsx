import React from "react";
import Category from "./category";
import { useParams } from "react-router-dom";

const CategoryContainer = () =>{

    const {id} = useParams()

    return(
        <Category id={id}/>
    )
}

export default CategoryContainer