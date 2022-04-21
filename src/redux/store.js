import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './studentsSlice';
import usersReducer from './userSlice';

export default configureStore({
    reducer: {
        students: studentsReducer,
        users: usersReducer
    }
})