
import * as Types from "../types/actionTypes";
import axios from "axios";


export const saveUser = (user) => {
  return {
    type: Types.USER_AUTH,
    payload: user,
  };
};
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
const uurl ='https://etracker.onrender.com/api/user'


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

const login = (data) => {
  return async dispatch => {
    
      await axios
        .post(`${uurl}/login`, data)
        .then(function (response) {
          if (response?.status == 200) {
            dispatch(saveUser(response.data));
           
          }
        })
        .catch(function (error) {
            console.log("Error-->",error?.response?.data);
           dispatch(saveUser(null));
          
        });
    
  };
};
const SignUp = (data) => {
  return async dispatch => {
    
      await axios.post(`${uurl}/register`, data)
        .then(function (response) {
          if (response?.status == 200) {
            dispatch(saveUser(response.data));
           
          
          }
        })
        .catch(function (error) {
          console.log("Error-->",error?.response?.data);
         
    
           dispatch(saveUser(null));
          
        });
    
  };
};


export function fetchData(user) {
    //const owner = "63aaee95bb328d0032d0834b"
     const owner=user?.user?._id
    // console.log(user?user?._id,"user own get data-->",user)
   return async (dispatch) => {
      dispatch(fetchDataStart());
    try{
     await axios.post(`${url}/getOwnerActivity`,{owner})
       .then(function (response) {
         if (response) {
           const data = response.data;
            // console.log("response.data------->", data);
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
     console.log("action saveDATA---->",data)
  
     dispatch(saveData(data))
  });
     
    }
    catch (error) {
    console.log(error);
  }
     
  };
}

export function removeItem(_id) {
   return async (dispatch) => {
    //  console.log("_id===============>",_id);
    dispatch(removeSelectedItem(_id));
     await axios.post(`${url}/delete`,{_id})
       .then(function (response) {
         if (response) {
           const data = response.data;
            // console.log("response.data.DELETE------->", data);
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

     await axios.post(`${url}/update`,data)
       .then(function (response) {
         if (response) {
           const data = response.data;
            console.log("response.data.UPDATE------->", data);
            dispatch(saveData(data))
            window.location = '/'
         }
       })
       .catch(function (error) {
         console.log("UPDATE API ERROR-------->", error?.response?.data);
         
         
       });
   };
}