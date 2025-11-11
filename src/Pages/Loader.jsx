import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <FadeLoader color="#1e59fe" />

            {/* <span className="text-5xl loading loading-spinner text-info"></span> */}
        </div>
    );
};

export default Loader;