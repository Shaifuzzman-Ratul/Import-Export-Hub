import Aos from 'aos';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            productName: e.target.product.value,
            productImage: e.target.image.value,
            price: e.target.price.value,
            originCountry: e.target.country.value,
            rating: e.target.rating.value,
            availableQuantity: e.target.available.value,
            createdAt: new Date(),
            description: e.target.description.value

        }
        if (formData.rating > 5 || formData.rating < 0) {
            toast.error("Rating (0-5)")
            return;
        }
        fetch('https://trade-hub-server-indol.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(() => {

            // console.log(data);
            toast.success("Product add successfully! 🎉 ")
        }).catch(e => {
            console.log(e);

        })
        fetch('https://trade-hub-server-indol.vercel.app/exports', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => {
            console.log(data);

        }).catch(e => {
            console.log(e);

        })
    }
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div className='max-w-[1200px] mx-auto '>
            <Helmet>
                <title>{'Trade Hub-Add Product'}</title>

            </Helmet>
            <div>
                <div className='p-3'>  <h2 className='flex items-center text-2xl font-bold'><span className='font-bold'><Link to={'/'}><IoIosArrowBack />
                </Link></span><span>Add New Product</span></h2>
                    <p className='pl-3 '>Enter Product Details to Begin Exporting</p>
                </div>
                <div data-aos="flip-left" className=' flex items-center justify-center m-5 lg:mb-16  '>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs lg:w-lg border p-5 flex-col">

                            <p className='text-center font-bold text-xl p-4 mb-3'>Add Product Details</p>

                            <label className="label">Product Name</label>
                            <input name='product' type="text" className="input w-full" placeholder="Product Name" required />

                            <label className="label">Product Image</label>
                            <input name='image' type="text" className="input w-full" placeholder="Image URL" required />

                            <div className='flex gap-5 items-center'>
                                <span> <label className="label text-left">Price</label>
                                    <input name='price' type="number" className="input w-full" placeholder="Enter price $" required /></span>

                                <span className='pl-2'> <label className="label">Rating</label>
                                    <input name='rating' type="number" className="input w-full" placeholder="Rating (0-5)" required /></span>
                            </div>


                            <div className='flex gap-5 items-center'>    <span>   <label className="label">Origin Country</label>
                                <input name='country' type="text" className="input w-full" placeholder="Country name" required /></span>


                                <span> <label className="label">Available quantity</label>
                                    <input name='available' type="number" className="input w-full" placeholder="Available " required /></span></div>

                            <label className="label">Description</label>
                            <textarea name="description" id="" className="input w-full" placeholder="Description " rows="3" required></textarea>


                            <button className="btn btn-neutral bg-[#422ad5] mt-4">Add Product</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddProducts;