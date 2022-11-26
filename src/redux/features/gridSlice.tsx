// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dummyData from '../../dummyData';

// pulls in all dummy dummyData
// reducers cut it to Islands & Ireland, Churches and Castles, Houses & Staircases
const initialState = {
    dummyData: dummyData,
    displayGrid: 'none'
}

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        // returns all the array
        full: (state) => {
            state.displayGrid = 'all'
            console.log("all", state.dummyData)
        },
        // return islands and ireland

        islands: (state) => {
            //state = initialState
            //const filteredCards = state.dummyData.filter(obj => obj.altText === "Islands" || obj.altText === "Ireland")
            state.displayGrid = "Islands"
            console.log("islands and ireland", state.dummyData)
        },
        // // return castles and churches
        castles: (state) => {
            state = initialState
            state.displayGrid = state.dummyData.filter(obj => obj.altText === "Churches" || obj.altText === "Castles")
            console.log("castles and churches", state.dummyData)
        },
        // return stairs and houses
        houses: (state) => {
            state = initialState
            state.displayGrid = state.dummyData.filter(obj => obj.altText === "Stairs" || obj.altText === "Houses")
            console.log("stairs and houses", state.dummyData)
        },
        // return none
        none: (state) => {
            state.dummyData = []
            console.log("Empty array")
        }
    }
});

export const { full, islands, castles, houses, none} = gridSlice.actions;
export default gridSlice.reducer;