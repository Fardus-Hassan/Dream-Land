import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';
import { FreeMode, Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import { sliderSettings } from './properties';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




const Properties = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="md:mt-[100px] mt-10 block px-2">
            <div data-aos="zoom-in" data-aos-duration="1000" className="text-center">
                <h1 className="font-jost text-3xl font-semibold">Recently Added Properties For Sale</h1>
                <p className="font-medium text-[16px] mt-6 max-w-[750px] text-black text-opacity-60 mx-auto jost ">Search land for sale in your local area by price, amenities, or other features. We’ll show you the sales history and provide helpful advice.

                </p>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    {
                        ...sliderSettings
                    }
                    className="mySwiper overflow-auto"
                >
                    {
                        data && data.map((info, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card info={info}></Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Properties;