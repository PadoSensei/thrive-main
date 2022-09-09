import dummyData from '../dummyData';

export const getBusinesses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
};
