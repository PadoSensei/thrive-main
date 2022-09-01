import AppCard from './AppCard';
import dummyData from '../dummyData';
import { useState } from 'react';
import AppLoader from './AppLoader';

const Main = () => {
    const [bizCards, setBizCards ] = useState(dummyData);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
        {isLoading ? <AppLoader /> :
        bizCards.map(({dataNumber, image, title, badgeText, altText, blurbText, buttonText}) => (
            <AppCard 
                key={dataNumber}
                image={image} 
                title={title} 
                altText={altText}
                badgeText={badgeText}
                blurbText={blurbText}
                buttonText={buttonText}    
                dataNumber={dataNumber}
            />
            ))}
        </>
    );
};

export default Main;
