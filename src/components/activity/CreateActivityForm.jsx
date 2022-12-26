import React,{ useRef, useState,useEffect } from "react";
import CreateActivity from "./CreateActivity"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchData, postData, updateItem, saveData} from "../../store/actions/actions"
// import { useNavigate } from 'react-router-dom';


const CreateActivityForm= ({editClick, selectedItem}) => {
    // const navigate = useNavigate();
  const types=["swim","walk","ride","bicycle ride","run","hike"]
   const dispatch = useDispatch();
  const title = useRef("hello");
  const description = useRef();
  const duration = useRef();
  const status = useRef();
  const date = useRef();
  const { data, loading } = useSelector((state) => ({...state.data}) );

//  console.log("selectedItem------->", selectedItem);


  useEffect(() => {

     dispatch(fetchData());
    
  }, [])


  const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState();


    const submitForm=(e)=>{
      e.preventDefault()
      if(editClick===true){
         let resultedArray=data?.map((item)=>{
          if(item._id===selectedItem._id){
            return{
              ...item,
              title:title.current.value,
             duration:duration.current.value,
             description:description.current.value,
            }
          }
          else{
            return{
              ...item
            }
          }
         })
         dispatch(saveData(resultedArray));
         let objSending={
            activityID:selectedItem._id,
             title:title.current.value,
             duration:duration.current.value,
             description:description.current.value,
             date:selectedItem.date,
             activityType:selectedItem.activityType
         }
         dispatch(updateItem(objSending))
         
   
        //  console.log("resultedArray------>",resultedArray)
      }
      else{
      const result={
        title:title.current.value,
        duration:duration.current.value,
        description:description.current.value,
        activityType:status.current.value,
        date:startDate,
        owner:"63a97236dcfde4003269d5b8"
      }

      // console.log("startDate", startDate)
     
         dispatch(postData(result));
         title.current.value=" ";
         duration.current.value=" ";
         description.current.value=" "
         
    }
    dispatch(fetchData());
    }




  return (<div>
                <h3>Create New Exercise Activity</h3>

                <form className="container-fluid border mt-3" style={{width:"75%"}}>
                    <div className="form-group d-flex m-3">
                        <label className="m-3 fw-bold">Title </label>
   <input type="text"
    ref={title} placeholder="Title"
                        required
                        className="form-control"
                        defaultValue={editClick===true?selectedItem?.title:""}
                 />
                 </div>
                 <div className="form-group d-flex m-3">
                        <label className="m-3 fw-bold">Type </label>
                        <select 
                        required
                        className="form-control"
                        ref={status}
                        >
                            {
                                types.map(function(user) {
                                    return <option
                                    key = {user}
                                    value = {user}
                                        >
                                        {user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                     <div className="form-group d-flex m-2  row">
                      <div className="d-flex m-2 col-md-6 col-sm-12">
                        <label className="fw-bold m-1">Duration (in minutes): </label>
                        <input type="text"
                            ref={duration} placeholder="duration"
                        required
                        className="form-control"
                         defaultValue={editClick===true?selectedItem?.duration:""}
                         />
       </div>
       <div  className="d-flex m-2 col-md-4 col-sm-12">
                        <label className="form-label fw-bold m-2">Date: </label>
                     <div className="m-2">
                           <DatePicker selected={startDate}  onChange={(date) => setStartDate(date)} />
                        
                       </div>
                   </div>
                    </div>

                    <div className="form-group  m-3 d-flex ">
  <label for="exampleFormControlTextarea1" className="form-label fw-bold m-2">Description</label>
  <textarea   required  ref={description} placeholder="Description" className="form-control" id="exampleFormControlTextarea1"
   defaultValue={editClick===true?selectedItem?.description:""} rows="5"/>
</div>

<button
          className="btn btn-primary fw-bold m-3"
          type="submit"
          value="submit"
         onClick={(e)=>submitForm(e)}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span class="sr-only m-3">Loading...</span>
            </>
          ) : (
           editClick===true?"UPDATE EXERCISE ACTIVITY": "CREATE EXERCISE ACTIVITY"
          )}
        </button>
                    

                    {/* <div className="form-group pb-5" onClick={(e)=>submitForm(e)}>
                      
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div> */}

                </form>
               
            </div>);
};

export default CreateActivityForm