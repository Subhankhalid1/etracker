import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { fetchData, removeItem, updateItem } from "../../store/actions/actions"

 export default function Card() {
  const dispatch = useDispatch()

  // const aar=[]
const { data, loading } = useSelector((state) => ({...state.data}) );

const deleteItem=(_id)=>{
  // e.preventDefault()
console.log(_id)
dispatch(removeItem(_id))
}
const editItem=(item)=>{
console.log("editItem---->", item)
dispatch(updateItem(item))
}

   console.log("-------000", data);
  return (<div className="container d-flex justify-content-center flex-wrap border">
    {data?data?.map((item, id) =>(<div className="card m-3" style={{width:"18rem"}} key={id}>
     <div className="card-body">
       <h5 className="card-title">{item?.title}</h5>
       <div className="d-flex justify-content-between p-1">
        <span> {item?.duration} minutes</span>
        <span>{item?.activityType[0]} </span>
        </div>
       <p className="card-text">{item?.description.slice(0, 75)}</p>
       <a href="#" class="card-link text-primary" onClick={()=>editItem(item)}>Edit</a>
       <a href="#" class="card-link text-danger" onClick={()=>deleteItem(item._id)}>Delete</a>
      </div>
   </div>)):<h3 className="border mt-5"> Not Found Yet.</h3>
   }
 
    </div>
  )
}
