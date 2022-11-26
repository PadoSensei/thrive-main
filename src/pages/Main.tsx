// @ts-nocheck
// react hooks
import { useEffect, useState } from 'react';
// components
import AppLoader from '../components/AppLoader';
import AppGrid from '../components/AppGrid';
import useFetchData from '../components/useFetchData';
//import { useAppDispatch, useAppSelector, useCountSelector } from '../hooks';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayedData, setDisplayedData] = useState(null);
  const { wasDataFetched, data } = useFetchData();
  //console.log(wasDataFetched);
  const { displayGrid }  = useSelector((state) => state.rootReducer.grid) 
  const { dummyData }  = useSelector((state) => state.rootReducer.grid) 


  useEffect(() => {
    let filtered;
    if(displayGrid === "Island"){
      filtered = state.dummyData.filter(obj => obj.altText === "Islands" || obj.altText === "Ireland")

    }
    setDisplayedData(filtered)
    setIsLoading(true)
  }, [displayGrid])
  


  // useEffect(() => {
  //   setIsLoading(wasDataFetched);
  // }, [wasDataFetched]);

  return (
     <>
      {!isLoading ? <AppLoader /> : <AppGrid data={data} /> }
     </>
    
    /* <h1>{displayGrid}</h1>
      <AppGrid data={displayedData} />
    </> */
  );
};

export default Main;
