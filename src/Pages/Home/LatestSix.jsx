import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const LatestSix = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://trade-hub-server-indol.vercel.app/latest').then(res => res.json()).then(data => setData(data)).catch(e => console.log(e)
        )
    }, [])
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

    }, []);
    const description = data.description;
    console.log(description);

    // const sortDescription = description.split('.');

    return (
        <div className=' max-w-[1400px] mx-auto ' >
            <div className=''>
                <div className=' text-2xl font-bold mt-12'>Latest Products</div>
                <p className=' mb-2'>Explore new added products</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map(data => <div key={data._id} data-aos="fade-down" className="card bg-base-100 w-full min-w-xs shadow-sm mt-5 mb-8 ">
                        <figure>
                            <img className='w-full h-[250px]'
                                src={data.productImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title flex justify-between">
                                <div className='flex items-center gap-1 justify-center'> <FaStar className='text-yellow-500' />

                                    <span>{data.rating}</span></div>

                            </h2>
                            <h2 className="card-title font-bold p-3">{data.productName
                            }</h2>
                            <p className='p-3'>{data.description.split('.')[0]}.</p>

                            <div className='font-semibold text-md pl-3'><span className=''>Origin Country :</span> <div className="badge border-2 border-indigo-100 bg-gray-100 text-indigo-500 text-sm">{data.originCountry}</div></div>
                            <p className='font-semibold pl-3'>Availabe : <span className='text-indigo-600 '>{data.availableQuantity}</span></p>
                            {/* #4a1437 */}
                            <div className="card-actions justify-between items-center">
                                <div className="badge border-2 border-gray-300 font-bold text-lg p-3">${data.price}</div>
                                <Link to={`/details/${data._id}`}><button className="btn btn-active text-gray-200 bg-linear-to-r from-[#4f39f6] to-purple-600">View Details</button></Link>


                            </div>
                        </div>
                    </div>

                    )


                }
            </div>
        </div>
    );
};

export default LatestSix;



