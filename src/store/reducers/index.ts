import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import post from "./post";

export const rootReducer = combineReducers({ user, post });

export default rootReducer;
