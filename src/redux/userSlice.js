import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '1', name: 'Admin', email: 'admin@gmail.com', password: '1234'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userRegistered(state, action) {
            state.push(action.payload)
        }
    }
})

export default usersSlice.reducer;