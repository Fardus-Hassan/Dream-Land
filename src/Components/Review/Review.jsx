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
import { sliderSettings } from './review';
import ReviewCard from './ReviewCard';


const Review = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div  className="md:mt-[100px] mt-10 px-5 block">
            <div data-aos="zoom-in" data-aos-duration="1000" className="text-center md:mb-12 mb-6">
                <h1 className="font-jost text-3xl font-semibold">
                    Customer Reviews</h1>
                <p className="font-medium text-[16px] mt-6 max-w-[750px] text-black text-opacity-60 mx-auto jost ">Customer reviews reflect experiences, strengths, weaknesses, and satisfaction levels. Analyzing them guides improvements, enhances satisfaction, and boosts competitiveness.

                </p>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <Swiper
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    {
                    ...sliderSettings
                    }
                    className="mySwiper"
                >
                    {
                        data && data.map((info, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ReviewCard info={info}></ReviewCard>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            
        </div>
    );
};

export default Review;