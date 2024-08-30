import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'jai'},
    {id: '1', name: 'dileep'},
    {id: '2', name: 'bhanu'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {}
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer