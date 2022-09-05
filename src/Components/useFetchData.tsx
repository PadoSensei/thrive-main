import { useState, useEffect } from 'react';
import dummyData from '../dummyData';

type bizCard = {
    dataNumber: number;
    images: string[];
    title: string;
    badgeText: string;
    altText: string;
    blurbText:string;
    buttonText: string;
}


// function will later be adapted for real async api call
// currently send data with timeout to mock api
const useFetchData = () => {
    const [wasDataFetched, setWasDataFetched] = useState(false);
    const [data, setData] = useState<bizCard[]>([]);

    useEffect(() => {
        const fetchDummyData = () => {
            return Promise.resolve(dummyData)
        }

        const fakeApiCall = async () =>{
            const result = await fetchDummyData();
            setData(result);
            setWasDataFetched(true);
        }

        setTimeout(fakeApiCall, 5000)

    }, []);

    return { wasDataFetched, data };
};

export default useFetchData