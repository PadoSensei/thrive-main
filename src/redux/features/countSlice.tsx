// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
});

export default countSlice.reducer;