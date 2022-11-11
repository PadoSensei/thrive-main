// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        addFive: (state) => {
            state.count = state.count + 5;
        },
        lessFive: (state) => {
            state.count = state.count - 5;
        }
    }
});

export const { addFive, lessFive} = countSlice.actions;
export default countSlice.reducer;