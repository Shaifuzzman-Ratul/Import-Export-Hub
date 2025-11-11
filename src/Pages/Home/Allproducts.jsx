import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import ProductsCard from './ProductsCard';
import Loader from '../Loader';

const Allproducts = () => {
    // const promiseData = useLoaderData();
    // console.log();
    // const [allData, setAllData] = useState([]);
    // const [loading, setLoading] = useState(true);

    const [allData, setData] = useState([]); useEffect(() => { fetch('http://localhost:3000/products').then(res => res.json()).then(data => { setData(data) }) }, [])

    console.log(allData);


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