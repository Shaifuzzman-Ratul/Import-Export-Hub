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
        "https://i.ibb.co.com/JwbNXvFb/photo-1626785774625-ddcddc3445e9.jpg",
        "https://i.ibb.co.com/Nds2fmGP/premium-photo-1661425715124-310ec1b49b8a.jpg",
        "https://i.ibb.co.com/h1hdqKPF/photo-1542038784456-1ea8e935640e.jpg",
        "https://i.ibb.co.com/hxmrrgc6/photo-1598520106830-8c45c2035460.jpg",
        "https://i.ibb.co.com/fGGS23n7/photo-1734113542343-fc916b32ef17.jpg"
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
