// @ts-nocheck
// react hooks
import { useEffect, useState } from 'react';
// components
import AppLoader from '../components/AppLoader';
import AppGrid from '../components/AppGrid';

import useFetchData from '../components/useFetchData';

// 
import { useSelector } from 'react-redux';

import { AppState } from '../redux/rootReducer';
import { useAppDispatch, useAppSelector, useCountSelector } from '../hooks';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { wasDataFetched, data } = useFetchData();
  //console.log(wasDataFetched);

  // redux
  //const count = useSelector((state: AppState) => state.count);
  const count = useSelector((state) => state.countReducer)

  console.log(count);
 
  useEffect(() => {
    setIsLoading(wasDataFetched);
  }, [wasDataFetched]);

  return (
    <>
      {!isLoading ? <AppLoader /> : <AppGrid data={data} /> }
    </>
  );
};

export default Main;
