// import React, { useEffect, useState } from 'react';

import ProductsCard from './ProductsCard';
import Loader from '../Loader';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import HelmetExport, { Helmet } from "react-helmet";

const Allproducts = () => {
    const promiseData = useLoaderData();
    // const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState("")
    // setAllData(promiseData);

    // console.log(promiseData);

    const filteredData = promiseData.filter(product => product.productName.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredData);



    return (
        <div className=' max-w-[1400px] mx-auto' >
            <Helmet> <title>Trade Hub-All Products</title></Helmet>
            <div>
                <div className='text-2xl font-bold mt-8'>All Products</div>
                <p className=' mb-2'>Explore new products</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    (filteredData && filteredData.length > 0 ? filteredData : promiseData).map(data => <ProductsCard data={data} key={data._id}></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Allproducts;