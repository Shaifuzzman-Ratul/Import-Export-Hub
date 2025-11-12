import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';

const MyExport = () => {
    const AllData = useLoaderData();
    // console.log(data);
    console.log(AllData);
    // const [availableQuantity, description, originCountry, price, productImage, productName, rating, _id] = data;
    // console.log(price, _id);


    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='p-3'>  <h2 className='flex items-center text-2xl font-bold'><span className='font-bold'><Link to={'/'}><IoIosArrowBack />
            </Link></span><span>My Export Products</span></h2>
                <p className='pl-3 '>Enter Product Details to Begin Exporting</p>
            </div>
            <div>


                {
                    AllData.map(data =>
                        <div className=''>
                            <ul className="list bg-base-100 rounded-box shadow-lg">

                                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                                <li className="list-row">
                                    <div><img className="size-28 rounded-box" src={data.productImage} /></div>
                                    <div className='space-y-1 lg:space-y-2'>
                                        <div className="text-lg uppercase font-semibold opacity-90" >{data.productName}</div>

                                        <span className='lg:flex gap-9'><div className='text-md font-semibold opacity-90'>Price: ${data.price}</div>
                                            <div className="text-md uppercase font-semibold opacity-90">Rating: {data.rating}</div></span>
                                        <span className='lg:flex gap-5'><div className="text-md uppercase font-semibold opacity-90">Available: {data.availableQuantity}</div>
                                            <div className="text-md uppercase font-semibold opacity-90">Country: {data.originCountry}</div></span>

                                    </div>
                                    <div className='flex flex-col lg:flex-row gap-3 justify-center items-center  '>
                                        <button className="btn text-white bg-red-500 ">
                                            Delete
                                        </button>
                                        <button className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        // <div key={data._id} className='flex'>
                        //     <div className='w-[50px] h-[50px]'> <img className='w-full' src={data.productImage} alt="" />
                        //     </div>

                        //     <span className='flex justify-between'>
                        //         <div>
                        //             <h2>{data.productName}</h2>
                        //             <span>
                        //                 <p>{data.rating}</p>
                        //                 <p>{data.price}</p>
                        //             </span>
                        //             <span>
                        //                 <p>{data.originCountry}</p>
                        //                 <p>{data.availableQuantity}</p>
                        //             </span>
                        //         </div>
                        //         <div>
                        //             <button>delte</button>
                        //             <button>update</button>
                        //         </div>
                        //     </span>
                        // </div>

                    )
                }
            </div>

        </div>
    );
};

export default MyExport;