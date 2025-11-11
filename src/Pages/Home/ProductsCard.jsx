import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductsCard = ({ data }) => {
    console.log(data);
    const { availableQuantity, createdAt, originCountry, price, productImage, productName, rating, _id } = data;

    return (
        <div>
            <div data-aos="fade-down" className="card bg-base-100 w-full min-w-xs shadow-sm mt-5  ">
                <figure>
                    <img className='w-full h-[250px]'
                        src={productImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title flex justify-between">
                        <div className='flex items-center gap-1 justify-center'> <FaStar className='text-yellow-500' />

                            <span>{rating}</span></div>

                    </h2>
                    <h2 className="card-title font-bold p-3">{productName
                    }</h2>
                    <p className='font-semibold text-md pl-3'><span className=''>Origin Country :</span> <div className="badge border-2 border-indigo-500 bg-gray-100 text-indigo-500 text-sm">{originCountry}</div></p>
                    <p className='font-semibold pl-3'>Availabe : <span className='text-indigo-600 '>{availableQuantity}</span></p>
                    {/* #4a1437 */}
                    <div className="card-actions justify-between items-center">
                        <div className="badge border-2 border-gray-300 font-bold text-lg p-3">${price}</div>
                        <Link to={`/details/${_id}`}><button className="btn btn-active text-gray-200 bg-linear-to-r from-[#4f39f6] to-purple-600">View Details</button></Link>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductsCard;