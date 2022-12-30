import * as Types from "../types/actionTypes.js";

const initialState = {
  data: [],
  user: null,
  loading: false,
  error: null,
};

const DataReducer = (state = initialState, action) => {
  // console.log("action=====>", action?.payload)
  switch (action.type) {
    case Types.USER_AUTH: {
      return {
        ...state,
        user: action.payload,
      };
    }
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
         data: action.payload
      };
    }
     case Types.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        data: state.data.filter((el) => el._id !== action.payload),
      };
    //   case Types.UPDATE_DATA:{
       
    //   const { _id, title, description,duration } = action.payload
    //   console.log("lll",title)
    //   const existingPost = state.data.find(post => post._id === _id)
    //   if (existingPost) {
    //     existingPost.title = title
    //     existingPost.description = description
    //     existingPost.duration = duration
    //   existingPost.activityType=existingPost.activityType
    //   existingPost.date = existingPost.date 
    // }
    //   }
 

    default:
      return state;
  }
};
 

  // console.log("initialState", initialState?.data);

export default DataReducer;