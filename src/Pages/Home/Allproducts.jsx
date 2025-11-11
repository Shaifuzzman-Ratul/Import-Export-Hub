import React from 'react';
import { useLoaderData } from 'react-router';
import ProductsCard from './ProductsCard';

const Allproducts = () => {
    const allData = useLoaderData();

    return (
        <div >
            <div className='text-2xl text-center font-bold'>All Products</div>
            <p className='text-center mb-10'>Explore new products</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    allData.map(data => <ProductsCard data={data} key={data._id}></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Allproducts;