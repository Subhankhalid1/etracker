import { combineReducers } from "redux"
import DataReducer from "./reducers/reducer"

const rootReducer = combineReducers({
    data:DataReducer
})

export default rootReducer