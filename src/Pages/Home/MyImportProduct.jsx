import React from 'react';
// import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyImportProduct = ({ data }) => {
    console.log(data);

    const navigate = useNavigate();



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

            fetch(`https://trade-hub-server-indol.vercel.app/exports/${data._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },

            }).then(res => res.json()).then(() => {

                navigate('/imports')
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
        <div className='max-w-[1200px] mx-auto pb-5'>
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

                                <Link to={`/details/${data._id}`}>  <button className="btn btn-primary">
                                    Details
                                </button>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyImportProduct;
