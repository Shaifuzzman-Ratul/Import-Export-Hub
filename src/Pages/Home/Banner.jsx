import React, { useEffect } from 'react';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router';
import Aos from 'aos';

const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <section data-aos="fade-up" className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-4 overflow-hidden">
            <div className="flex-1 md:flex-[0.8] text-center md:text-left space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
                    Your Gateway to Global Opportunities
                </h1>
                <p className="text-gray-600 dark:text-gray-500 text-lg  ">
                    From sourcing to shipping, Trade Hub helps you connect, collaborate, and succeed in international commerce.
                </p>
                <Link to="/add-exports"> <button className="px-8 py-3 bg-[#432bd5] text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                    Get Started
                </button></Link>
            </div>


            <div className="flex-1 md:flex-[1.2] w-full overflow-hidden">
                <BannerSlider></BannerSlider>
            </div>
        </section>
    );
};

export default Banner;
