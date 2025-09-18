import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profileReducer from '../slices/profileSlice'
import refreshPage from "../slices/refreshPage";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  refreshPage: refreshPage
});

export default rootReducer;
