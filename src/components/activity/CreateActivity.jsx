import React,{useState} from 'react'
import CardFrame from "../ActivityList/CardFrame"
import CreateActivityForm from "./CreateActivityForm"
const CreateActivity = () => {


  return (
   <div>
    <CreateActivityForm/>
    <CardFrame/>
    </div>
  )
}


export default CreateActivity