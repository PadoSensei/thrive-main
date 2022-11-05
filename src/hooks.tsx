import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store/store';
//import { RootState } from './redux/rootReducer';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useCountSelector = () => {
//   let count = useSelector((state: RootState) => state.count);
//   return count;
// };
