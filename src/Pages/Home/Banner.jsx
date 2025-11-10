import React from 'react';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <section className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-4 overflow-hidden">
            <div className="flex-1 md:flex-[0.8] text-center md:text-left space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Your Gateway to Global Opportunities
                </h1>
                <p className="text-gray-600 text-lg">
                    From sourcing to shipping, Trade Hub helps you connect, collaborate, and succeed in international commerce.
                </p>
                <Link to="/view"> <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                    Get Started
                </button></Link>
            </div>


            <div className="flex-1 md:flex-[1.2] w-full overflow-hidden">
                <BannerSlider />
            </div>
        </section>
    );
};

export default Banner;
