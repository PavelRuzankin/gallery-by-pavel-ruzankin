import { combineReducers } from "redux";
import { imageListReducer } from "./imageListReducer";
import { sliderReducer } from "./sliderReducer";

export default combineReducers({imageList: imageListReducer, slider: sliderReducer})