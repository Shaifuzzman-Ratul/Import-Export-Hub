import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';
import MyExportProduct from './MyExportProduct';

const MyExport = () => {
    const AllData = useLoaderData();
    console.log(AllData);




    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='p-3'>  <h2 className='flex items-center text-2xl font-bold'><span className='font-bold'><Link to={'/'}><IoIosArrowBack />
            </Link></span><span>My Export Products</span></h2>
                <p className='pl-3 '>Update or delete products</p>
            </div>
            <div>


                {
                    AllData.map(data => <MyExportProduct data={data} key={data._id}></MyExportProduct>


                    )
                }
            </div>

        </div>
    );
};

export default MyExport;