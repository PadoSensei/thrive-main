// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// pulls in all data
// reducers cut it to Islands & Ireland, Churches and Castles, Houses & Staircases
const initialState = {
    collections: [1,2,3,4],
    //display updated by dispatches, filter happens 
    display: 'all'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // returns all the array
        full: (state) => {
            state.display = "full"
            console.log(initialState.collections)
        },
        // return odd
        odd: (state) => {
            state.display = "odd";
            console.log(initialState.collections[0])
        },
        // return even
        even: (state) => {
            state.display = "even";
            console.log(initialState.collections[1])
        },
        none: (state) => {
            state.display = "none";
            console.log([])
        }
    }
});

export const { full, odd, even, none } = filterSlice.actions;
export default filterSlice.reducer;