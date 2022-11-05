// @ts-nocheck
import { configureStore, Action } from "@reduxjs/toolkit";
import rootReducer, { RootState } from '../rootReducer';
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
//import { devToolsEnhancer } from '@redux-devtools-extension';
// Additional middleware install? 
// https://blog.logrocket.com/using-typescript-with-redux-toolkit/

// sets up the store, loads it with all the reducers
export const store = configureStore({
  reducer: {rootReducer},
})

// export AppDispatch, it's a dispatch method on the store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()

// Don't know what a thunk is
export type AppThunk = ThunkAction<void, RootState, unknown, Action>


// RootState is the state of the store
export type RootState = ReturnType<typeof store.getState>
