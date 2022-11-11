// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dummyData from '../../dummyData';

// pulls in all dummy dummyData
// reducers cut it to Islands & Ireland, Churches and Castles, Houses & Staircases
const initialState = {
    dummyData: dummyData,
}

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        // returns all the array
        full: (state) => {
            state = initialState
            console.log("all", state.dummyData)
        },
        // return islands and ireland
        islands: (state) => {
            //const { dummyData } = state.dummyData
            state.dummyData = state.dummyData.filter(obj => obj.altText === "Islands" || obj.altText === "Ireland")
            console.log("islands and ireland", state.dummyData)
        },
        // // return castles and churches
        castles: (state) => {
            state.dummyData = state.dummyData.filter(obj => obj.altText === "Churches" || obj.altText === "Castles")
            console.log("castles and churches", state.dummyData)
        },
        // // return stairs and houses
        // even: (state) => {
        //     state.dummyData = "even";
        //     console.log("stairs and houses")
        // },
        // // return none
        // none: (state) => {
        //     state.dummyData = []
        //     console.log("Empty array")
        // }
    }
});

export const { full, islands, castles} = gridSlice.actions;
export default gridSlice.reducer;