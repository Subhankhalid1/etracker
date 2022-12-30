import React,{ useRef, useState,useEffect } from "react";
import CreateActivity from "./CreateActivity"
import DatePicker from "react-datepicker";
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchData, postData, updateItem, saveData} from "../../store/actions/actions"



const CreateActivityForm= ({editClick, selectedItem, heading, success}) => {
    // const navigate = useNavigate();
  const types=["swim","walk","ride","bicycle ride","run","hike"]
   const dispatch = useDispatch();
  const title = useRef("hello");
  const description = useRef();
  const duration = useRef();
  const status = useRef();
  const date = useRef();
  const { data, loading } = useSelector((state) => ({...state.data}) );
  const[user, setUser]=useState(null)
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);



useEffect(() => {
const userData=localStorage.getItem("response")
const val=JSON.parse(userData)

    dispatch(fetchData(val));
    setUser(val)
  }, [])

  // useEffect(() => {

  //    dispatch(fetchData(user));
    
  // }, [])

// console.log("user create form", user?.user?._id)

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
         toast.success("Form Data Updated Successfully.");
         
   
        //  console.log("resultedArray------>",resultedArray)
      }
      else{
      const result={
        title:title.current.value,
        duration:duration.current.value,
        description:description.current.value,
        activityType:status.current.value,
        date:startDate,
        owner:user?.user?._id
      }

      // console.log("startDate", startDate)
     if(title.current.value!=""&& description.current.value!=""&&duration.current.value!=""&&user?.user?._id!=""){
         dispatch(postData(result));
         window.setTimeout(()=> {
                  dispatch(fetchData(user));
         },1000)

            toast.success("Created Exercise Log Successfully.");

         title.current.value=" ";
         duration.current.value=" ";
         description.current.value=" "
        }

    }
    
    }




  return (<div>
       <ToastContainer />
            
                 <section className="text-center bygga-parent equip-parent py-3">
        {heading !== false && (
          <section className="container text-center mt-4">
            <span
              className=" h2 bold"
              style={{ borderBottom: "3px solid #dc3545", color: "black" }}
            >
              {success ? success : "CREATE NEW EXERCISE LOG"}
            </span>
            <div className={success ? "my-4" : "mx-auto my-2 service-text"}>
              {!success && (
                <span className="text-center mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem sequi
                </span>
              )}
            </div>
          </section>
        )}
      </section>

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
                        <input type="number"
                            ref={duration} placeholder="duration"
                        required
                        className="form-control"
                         defaultValue={editClick===true?selectedItem?.duration:""}
                         />
       </div>
       <div  className="d-flex m-2 col-md-4 col-sm-12">
                        <label className="form-label fw-bold m-2">Date: </label>
                     <div className=" m-2">
                           <DatePicker className="form-control" selected={startDate}  onChange={(date) => setStartDate(date)} />
                        
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
                    
<h6 className="text-danger">{editClick===true?"Only Title, Duration & description fields are changeable.":""}</h6>
                    {/* <div className="form-group pb-5" onClick={(e)=>submitForm(e)}>
                      
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div> */}

                </form>
               
            </div>);
};

export default CreateActivityForm