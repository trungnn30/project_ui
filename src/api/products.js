import axiosClient from './axiosClient';

const END_POINT = {
    PRODUCT: 'Product',
};

export const getProds = () => {
    return axiosClient.get(`${END_POINT.PRODUCT}`);
};
