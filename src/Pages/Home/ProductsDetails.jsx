import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { Helmet } from "react-helmet";

const ProductsDetails = () => {
    const data = useLoaderData();
    const { productName, productImage, availableQuantity, description, originCountry, price, rating } = data;
    const id = data._id;
    const [limit, setLimit] = useState(availableQuantity || 0);
    const [inputQuantity, setInputQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quantity = parseInt(e.target.quantity.value);

        if (quantity > limit || quantity <= 0) {
            toast.error("Check product availability");
            document.getElementById('import_modal').close();
            return;
        }

        const newLimit = limit - quantity;

        try {
            const res = await fetch(`https://trade-hub-server-indol.vercel.app/products/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ availableQuantity: newLimit })
            });

            const data = await res.json();
            console.log(data);

            setLimit(newLimit);
            toast.success("Successfully imported product 🎉");
            document.getElementById('import_modal').close();
            setInputQuantity(''); // reset input after submission
        } catch (err) {
            console.error(err);
            toast.error(err);
        }

        fetch('https://trade-hub-server-indol.vercel.app/imports', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trade Hub-Details</title>
            </Helmet>
            <div className='w-11/12 mx-auto my-8'>
                <div className='flex flex-col lg:flex-row lg:gap-16 items-start'>
                    <img
                        src={productImage}
                        alt={productName}
                        className='w-[300px] h-[250px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] rounded-2xl mb-4 lg:mb-0 object-cover'
                    />

                    <div className='m-4 lg:m-8 py-3'>
                        <p className='mt-4 mb-4 font-extrabold text-3xl'>{productName}</p>

                        <div className='flex flex-col lg:flex-row lg:gap-50'>
                            <p className='font-bold'>Price : $ {price}</p>
                            <p className='font-bold flex gap-2 items-center'>
                                Rating : <FaStar className='text-yellow-400' /> {rating}
                            </p>
                        </div>

                        <p className='font-bold my-2'>Available : {limit}</p>
                        <div className='flex item-center gap-1.5 font-bold'>
                            Country :
                            <p className='pl-2 mb-3 badge border-2 border-indigo-100 bg-gray-100 text-indigo-500'>{originCountry}</p>
                        </div>
                        <p>
                            <span className='font-bold'>Description :</span>
                            <span className='text-gray-600'>{description}</span>
                        </p>

                        <div className='mt-8'>
                            <button
                                className="bg-primary text-white btn"
                                onClick={() => document.getElementById('import_modal').showModal()}
                                disabled={limit <= 0}
                            >
                                Import Now
                            </button>
                            <button
                                className="bg-primary ml-3 text-white btn"

                            >
                                <FaDownload /> Download Details
                            </button>

                            <dialog id="import_modal" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>

                                    <h3 className="font-bold text-lg mb-4">Enter Quantity</h3>

                                    <form onSubmit={handleSubmit}>
                                        <input
                                            name='quantity'
                                            type="number"
                                            placeholder="Quantity"
                                            className="input input-bordered w-full mb-4"
                                            value={inputQuantity}
                                            onChange={(e) => setInputQuantity(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-full"
                                            disabled={parseInt(inputQuantity) > limit || parseInt(inputQuantity) <= 0}
                                        >
                                            Submit
                                        </button>

                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
