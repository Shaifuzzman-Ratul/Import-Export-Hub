import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyExportProduct = ({ data }) => {
    console.log(data);
    const { _id, productName, productImage, price, originCountry, availableQuantity, rating, description } = data
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        // console.log(click);
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

        fetch(`https://trade-hub-server-indol.vercel.app/exports/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(() => {
            // console.log(data);

            navigate('/exports')

            toast.success("Product updated successfully! 🎉 ")
            document.getElementById(`import_modal_${_id}`).close();
        }).catch(e => {
            console.log(e);

        })

    }


    const handleDeltete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            fetch(`https://trade-hub-server-indol.vercel.app/exports/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },

            }).then(res => res.json()).then(() => {

                navigate('/exports')
            }).catch(e => {
                console.log(e);

            })
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className='pb-5 max-w-[1200px] mx-auto'>
            <div className=''>
                {/* console.log(data); */}

                <ul className="list bg-base-100 rounded-box shadow-lg">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                    <li className="list-row">
                        <div><img className="size-28 rounded-box" src={data.productImage} /></div>
                        <div className='space-y-1 lg:space-y-2'>
                            <div className="text-lg font-semibold opacity-90" ><span>{data.productName}</span></div>

                            <span className='lg:flex gap-9'><div className='text-md font-semibold opacity-90'>Price: ${data.price}</div>
                                <div className="text-md font-semibold opacity-90">Rating: {data.rating}</div></span>
                            <span className='lg:flex gap-5'><div className="text-md  font-semibold opacity-90">Available: {data.availableQuantity}</div>
                                <div className="text-md  font-semibold opacity-90">Country: {data.originCountry}</div></span>

                        </div>
                        <div className='flex flex-col lg:flex-row gap-3 justify-center items-center  '>
                            <button onClick={handleDeltete} className="btn text-white bg-red-500 ">
                                Delete
                            </button>
                            <div className=''>
                                <button
                                    className="bg-primary text-white btn"
                                    onClick={() => document.getElementById(`import_modal_${_id}`).showModal()}
                                >
                                    Update
                                </button>

                                <dialog id={`import_modal_${_id}`} className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>

                                        <h3 className="font-bold text-lg mb-4">Edit product</h3>
                                        {/* onSubmit={handleSubmit} */}
                                        <form onSubmit={handleUpdate}>
                                            <label > Product Name</label>
                                            <input
                                                name='product'
                                                type="text"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={productName}
                                                // onChange={(e) =>
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <label > Product Image</label>
                                            <input
                                                name='image'
                                                type="text"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={productImage}
                                                // onChange={(e) =>
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <label > Price</label>
                                            <input
                                                name='price'
                                                type="number"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={price}
                                                // onChange={(e) => 
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <label > Rating</label>
                                            <input
                                                name='rating'
                                                type="number"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={rating}
                                                // onChange={(e) => 
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <label > Available</label>
                                            <input
                                                name='available'
                                                type="number"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={availableQuantity}
                                                // onChange={(e) => 
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <label > Country</label>
                                            <input
                                                name='country'
                                                type="text"
                                                placeholder=" Product Name"
                                                className="input input-bordered w-full mb-4"
                                                defaultValue={originCountry}
                                                // onChange={(e) => 
                                                //     setQuantity(e.target.value)}
                                                required
                                            />
                                            <span className='flex flex-col mb-4 '>  <label >Description</label>

                                                <textarea defaultValue={description} className='border' rows="4" name="description" id=""></textarea>
                                            </span>
                                            <button type="submit" className="btn btn-primary w-full">Submit</button>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyExportProduct;