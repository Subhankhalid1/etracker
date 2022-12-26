import React from 'react'
import { useParams } from "react-router-dom";
const EditPage = () => {
    const params = useParams();
    console.log("params", params)
  return (
    <div>EditPage</div>
  )
}


export default EditPage