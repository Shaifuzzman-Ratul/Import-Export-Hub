import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbCircleDashedNumber4 } from 'react-icons/tb';

const HowITWorks = () => {
    useEffect(() => {
        Aos.init({
            duration: 950,
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div data-aos="fade-up" className='w-11/12 mx-auto bg-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center rounded-lg py-8'>


            <div className='lg:pl-10 w-full lg:w-1/2'>
                <p className='font-bold text-blue-600'>How it works</p>

                <h1 className='text-2xl lg:text-3xl font-bold mt-2'>
                    How TRADE<span className='text-[#4a33d7]'>HUB</span> Works
                </h1>

                <div className='flex flex-col gap-4 mt-6'>
                    <div className='flex items-center justify-between font-semibold'>
                        <TbCircleDashedNumber1 className='text-blue-700 font-extrabold text-xl' />
                        <p>Sign Up</p>
                        <FaAngleDown />
                    </div>
                    <div className='flex items-center justify-between font-semibold'>
                        <TbCircleDashedNumber2 className='text-blue-700 font-extrabold text-xl' />
                        <p>Browse For your Desire Item</p>
                        <FaAngleDown />
                    </div>
                    <div className='flex items-center justify-between font-semibold'>
                        <TbCircleDashedNumber3 className='text-blue-700 font-extrabold text-xl' />
                        <p>Start Export or Import products</p>
                        <FaAngleDown />
                    </div>
                    <div className='flex items-center justify-between font-semibold'>
                        <TbCircleDashedNumber4 className='text-blue-700 font-extrabold text-xl' />
                        <p>Get Support</p>
                        <FaAngleDown />
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center'>
                <img
                    className='max-h-[400px] w-full lg:w-auto rounded-2xl object-cover'
                    src='https://i.ibb.co.com/MkcnX0Mv/photo-1519389950473-47ba0277781c.jpg'
                    alt='How it Works'
                />
            </div>
        </div>
    );
};

export default HowITWorks;
