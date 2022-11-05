// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
});

console.log(countSlice);

export default countSlice.reducer;