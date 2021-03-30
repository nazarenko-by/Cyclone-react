import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { reducer as fetchReducer } from 'react-redux-fetch';


export const rootReducer = combineReducers({
    topicLikeState:likeReducer,
    repository:fetchReducer  
})