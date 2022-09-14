import AppCard from '../Components/AppCard';
import { useEffect, useState } from 'react';
import AppLoader from '../Components/AppLoader';
import useFetchData from '../Components/useFetchData';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { wasDataFetched, data } = useFetchData();
  console.log(wasDataFetched);

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
                dataNumber={dataNumber}
              />
            );
          }
        )
      )}
    </>
  );
};

export default Main;
