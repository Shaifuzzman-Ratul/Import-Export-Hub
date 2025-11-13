import React from 'react';

const TrustSection = () => {
    return (
        <div className='mt-8 mb-9'>
            <div className='text-white bg-linear-to-b from-[#101828] to-[#8a4fed] lg:h-[360px] text-center p-15'>
                <h1 className='text-4xl font-bold pb-6'>Why Choose TRADE <span className='text-[#4f39f6]'>HUB</span> !</h1>

                <div className='flex flex-col lg:flex-row justify-around py-4 items-center max-w-[900px] mx-auto text-center space-y-6 lg:space-y-0'>

                    <span>
                        <h4 className='text-gray-300 pb-3'>Total Sells</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>29.6M</h1>
                        <p className='text-gray-300'>21% more than last month</p>
                    </span>

                    <span>
                        <h4 className='text-gray-300 pb-3'>Total Export</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>906K</h1>
                        <p className='text-gray-300'>61% more than last month</p>
                    </span>

                    <span>
                        <h4 className='text-gray-300 pb-3'>Total Import</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>509K</h1>
                        <p className='text-gray-300'>39% more than last month</p>
                    </span>

                    <span>
                        <h4 className='text-gray-300 pb-3'>Active Users</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>132+</h1>
                        <p className='text-gray-300'>311 more will Launch</p>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default TrustSection;
