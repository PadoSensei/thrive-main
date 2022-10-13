import { combineReducers } from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer,
})

console.log(rootReducer)

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;