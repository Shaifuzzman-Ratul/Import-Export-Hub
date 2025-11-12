// import React, { useEffect, useState } from 'react';

import ProductsCard from './ProductsCard';
import Loader from '../Loader';
import { useLoaderData } from 'react-router';

const Allproducts = () => {
    const promiseData = useLoaderData();



    return (
        <div className=' max-w-[1400px] mx-auto' >
            <div>
                <div className='text-2xl font-bold mt-8'>All Products</div>
                <p className=' mb-10'>Explore new products</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    promiseData.map(data => <ProductsCard data={data} key={data._id}></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Allproducts;