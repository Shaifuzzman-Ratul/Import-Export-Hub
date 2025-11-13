import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';
import MyImportProduct from './MyImportProduct';
import { Helmet } from "react-helmet";

const MyImportPage = () => {
    const allData = useLoaderData();
    // console.log(allData);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trade Hub-My Import</title>
            </Helmet>
            <div className='max-w-[1200px] mx-auto'>
                <div className='p-3'>  <h2 className='flex items-center text-2xl font-bold'><span className='font-bold'><Link to={'/'}><IoIosArrowBack />
                </Link></span><span>My Import Products</span></h2>
                    <p className='pl-3 '>See product details or delete </p>
                </div>
                <div className='mb-10 '>


                    {
                        allData.map(data => <MyImportProduct data={data} key={data._id}></MyImportProduct>)


                    }
                </div>

            </div>
        </div>
    );
};

export default MyImportPage;