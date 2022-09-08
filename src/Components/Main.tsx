import AppCard from './AppCard';
import { useEffect, useState } from 'react';
import AppLoader from './AppLoader';
import useFetchData from './useFetchData';

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { wasDataFetched, data } = useFetchData()
    console.log(wasDataFetched)

    useEffect(() => {
        setIsLoading(wasDataFetched)
    },[wasDataFetched])


    // refactor data.map to be more succinct
    // typescript errors
    // const mainGrid = data.map({dataNumber, image, title, badgeText, altText, blurbText, buttonText}) => {
    //     return <AppCard 
    //         key={dataNumber}
    //         image={image} 
    //         title={title} 
    //         altText={altText}
    //         badgeText={badgeText}
    //         blurbText={blurbText}
    //         buttonText={buttonText}    
    //         dataNumber={dataNumber}
    //     />;
    // }

    return (
        <>
        {!isLoading ? <AppLoader /> : data.map(({dataNumber, images, title, badgeText, altText, blurbText, buttonText}) => {
        return <AppCard 
            key={dataNumber}
            images={images} 
            title={title} 
            altText={altText}
            badgeText={badgeText}
            blurbText={blurbText}
            buttonText={buttonText}    
            dataNumber={dataNumber}
        />;
    })
        }
        </>
    );
};

export default Main;
