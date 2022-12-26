import * as Types from "../types/actionTypes";
import axios from "axios";
import { toast } from "react-toastify";


const fetchDataStart = () => ({
  type: Types.FETCH_DATA_START,
});

const fetchDataSuccess = (data) => ({
  type: Types.FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFail = (error) => ({
  type: Types.FETCH_DATA_FAIL,
  payload: error,
});

export const updatedData = (data) => ({
  type: Types.UPDATE_DATA,
  payload: data,
});
export const saveData = (data) => {
  return {
    type: Types.SAVE_DATA,
    payload: data,
  };
};
export const removeSelectedItem = (_id) => {
  return {
    type: Types.REMOVE_SELECTED_ITEM,
    payload: _id,
  };
};


const url = 'https://etracker.onrender.com/api/activity';
// export const fetchData = async () => {
//   try {
//     dispatch(fetchDataStart());
//     const response = await fetch(url);
//     if(response){
//        const data =  response.json();
//     dispatch(fetchDataSuccess(data));
//     console.log(data);
//     }
   
//   } catch (error) {
//      dispatch(fetchDataFail(error));
//     console.log(error);
//   }
// };


// export function fetchData() {
//   return async (dispatch) => {
//     dispatch(fetchDataStart());
//     try{
//     await fetch(`${url}`)
//     .then(res=>res.json())
//   .then(data=>{
//     console.log(data)
//     dispatch(fetchDataSuccess(data))
//   });
     
//     }
//     catch (error) {
//       dispatch(fetchDataFail(error));
//     console.log(error);
//   }
     
//   };
// }


export function fetchData() {
    // const owner = "63a19ff8c3b79f4d200fe900"
    const owner="63a97236dcfde4003269d5b8"
   return async (dispatch) => {
    //  console.log("_id===============>",data);
      dispatch(fetchDataStart());
    // dispatch(removeSelectedItem(_id));
    try{
     await axios.post(`${url}/getOwnerActivity`,{owner})
       .then(function (response) {
         if (response) {
           const data = response.data;
            console.log("response.data------->", data);
            dispatch(fetchDataSuccess(data))
       
         }
       })}
       catch (error) {
         dispatch(fetchDataFail(error));
   
         console.log("GETOWNERDATA API ERROR-------->", error?.response?.data);
         
         
       };
   };
}
export function postData(result) {
  console.log(result,"result-----")
  return async (dispatch) => {
    try{
    await fetch(`${url}/create`, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(result)
  })
    .then(res=>res.json())
  .then(data=>{
   
    dispatch(saveData(data))
     console.log("action saveDATA---->",data)
  });
     
    }
    catch (error) {
      // dispatch(fetchDataFail(error));
    console.log(error);
  }
     
  };
}
// export const removeItem = (_id) => {
//   return async (dispatch) => {
//     dispatch(removeSelectedItem(_id));
//     try {
//       console.log(_id); 
//       await fetch(`${url}/delete`, {
//     method: 'post',
//     headers: {
//       'content-type': 'application/json'
//     },
//      _id: JSON.stringify(_id)
//   })
     
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
export function removeItem(_id) {
   return async (dispatch) => {
     console.log("_id===============>",_id);
    dispatch(removeSelectedItem(_id));
     await axios.post(`${url}/delete`,{_id})
       .then(function (response) {
         if (response) {
           const data = response.data;
            console.log("response.data.DELETE------->", data);
          
       
         }
       })
       .catch(function (error) {
         console.log("DELETE API ERROR-------->", error?.response?.data);
         
         
       });
   };
}
export function updateItem(data) {
   return async (dispatch) => {
     console.log("update data which we want===============>",data);
    // dispatch(removeSelectedItem(_id));
     dispatch(updatedData(data))
     await axios.post(`${url}/update`,{data})
       .then(function (response) {
         if (response) {
           const data = response.data;
            console.log("response.data.UPDATE------->", data);
            
         }
       })
       .catch(function (error) {
         console.log("UPDATE API ERROR-------->", error?.response?.data);
         
         
       });
   };
}