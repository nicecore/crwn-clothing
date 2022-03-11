// Overall reducer based on all the individual reducers that get pulled in.

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});


