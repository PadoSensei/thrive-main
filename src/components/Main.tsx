
import { useEffect, useState } from 'react';
import AppLoader from './AppLoader';
import AppGrid from './AppGrid'
import useFetchData from './useFetchData';


const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { wasDataFetched, data } = useFetchData()

    useEffect(() => {
        setIsLoading(wasDataFetched)
    },[wasDataFetched])

    return (
        <>
        {!isLoading ? <AppLoader /> : <AppGrid data={data} />}
        </>
    );
};

export default Main;
