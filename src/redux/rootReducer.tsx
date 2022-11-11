import { combineReducers } from '@reduxjs/toolkit';
import countSlice from './features/countSlice';
import filterSlice from './features/filterSlice';
import gridSlice from './features/gridSlice';


// combines all the reducer actions in one place for better mgmt
const rootReducer = combineReducers({
  count: countSlice,
  filter: filterSlice,
  grid: gridSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
