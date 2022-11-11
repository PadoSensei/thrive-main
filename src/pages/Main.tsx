// @ts-nocheck
// react hooks
import { useEffect, useState } from 'react';
// components
import AppLoader from '../components/AppLoader';
import AppGrid from '../components/AppGrid';

import useFetchData from '../components/useFetchData';
import { full, odd, even, none } from './filterSlice';
import { AppState } from '../redux/rootReducer';
//import { useAppDispatch, useAppSelector, useCountSelector } from '../hooks';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { wasDataFetched, data } = useFetchData();
  const dispatch = useDispatch();
  //console.log(wasDataFetched);
  const {display} = useSelector((state) => state.rootReducer.filter)
  const { dummyData }  = useSelector((state) => state.rootReducer.grid) 

  // redux
  //const count = useSelector((state: AppState) => state.count);
  
  useEffect(() => {
    setIsLoading(wasDataFetched);
  }, [wasDataFetched]);

  return (
    <>
      {!isLoading ? <AppLoader /> : <AppGrid data={dummyData} /> }
    </>
  );
};

export default Main;
