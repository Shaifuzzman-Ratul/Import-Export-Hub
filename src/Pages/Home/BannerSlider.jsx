import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Aos from 'aos';

const BannerSlider = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);
    const slides = [
        "https://i.ibb.co.com/dJWgGK8v/photo-1643622357625-c013987d90e7.jpg",

        "https://i.ibb.co.com/7PKckyR/premium-photo-1664648184173-efaaeccd8548.jpg",
        "https://i.ibb.co.com/wFnrFmVR/photo-1626379907480-29d844d603ca.jpg",

        "https://i.ibb.co.com/Y73f9xsf/istockphoto-464433694-612x612.webp",

        "https://i.ibb.co.com/bj61JpGf/premium-photo-1731696604052-d0c8527e7831.jpg",

    ];

    return (
        <div data-aos="fade-left" className="w-full overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                className="rounded-2xl overflow-hidden shadow-lg"
            >
                {slides.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center">
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-60 sm:h-72 md:h-[450px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
