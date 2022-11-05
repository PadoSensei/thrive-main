import { combineReducers } from '@reduxjs/toolkit';
import countSlice from './features/countSlice';
//import nameReducer from './nameReducer';


// combines all the reducer actions in one place for better mgmt
const rootReducer = combineReducers({
  count: countSlice,
  //name: nameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
