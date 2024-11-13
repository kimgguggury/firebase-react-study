import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import chatRoomReducer from './chatRoomsSlice';

export const store = configureStore({
  reducer : {
    user : userReducer,
    chatRoom : chatRoomReducer
  }
})