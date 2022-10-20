import AppCard from '../components/AppCard';
import { useEffect, useState } from 'react';
import AppLoader from '../components/AppLoader';
import useFetchData from '../components/useFetchData';
import { AppState } from '../redux/reducers/rootReducer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useSelector } from 'react-redux';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { wasDataFetched, data } = useFetchData();
  //console.log(wasDataFetched);

  // redux
  //const { count } = useAppSelector((state: AppState) => state.count);
  const count = useSelector((state: AppState) => state.count);
  //const count = useAppSelector<AppState>((state) => state.count.CountState);
  //const { name } = useAppSelector((state: AppState) => state.name);
  console.log(count);

  useEffect(() => {
    setIsLoading(wasDataFetched);
  }, [wasDataFetched]);

  return (
    <>
      {!isLoading ? (
        <AppLoader />
      ) : (
        data.map(
          ({
            dataNumber,
            images,
            title,
            badgeText,
            altText,
            blurbText,
            buttonText,
          }) => {
            return (
              <AppCard
                key={dataNumber}
                images={images}
                title={title}
                altText={altText}
                badgeText={badgeText}
                blurbText={blurbText}
                buttonText={buttonText}
                // dataNumber={dataNumber}
              />
            );
          }
        )
      )}
    </>
  );
};

export default Main;
