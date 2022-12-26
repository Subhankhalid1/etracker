import * as Types from "../types/actionTypes.js";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const DataReducer = (state = initialState, action) => {
  console.log("action=====>", action?.payload)
  switch (action.type) {
    case Types.FETCH_DATA_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload 
      };
    }
    case Types.FETCH_DATA_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
     case Types.SAVE_DATA: {
      return {
         ...state,
         loading: false,
         data: [...state.data, action.payload]
      };
    }
     case Types.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        data: state.data.filter((el) => el._id !== action.payload),
      };
      case Types.UPDATE_DATA:{
       
      const { _id, title, description,duration } = action.payload
      const existingPost = state.data.find(post => post._id === _id)
      if (existingPost) {
        existingPost.title = title
        existingPost.description = description
        existingPost.duration = duration
      
    }
      }
 

    default:
      return state;
  }
};
 

  // console.log("initialState", initialState?.data);

export default DataReducer;