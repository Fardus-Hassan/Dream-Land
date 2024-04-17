import React, { useEffect, useRef, useState } from 'react';
import SlotCounter from 'react-slot-counter';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    const [images, setImages] = useState(null)


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        fetch('/banner.json')
            .then(response => response.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='relative'>


            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper border-b-8 border-pmColor max-h-[800px] -mt-6"
            >
                {
                    images && images.map((image, index) => {
                        return (
                            <SwiperSlide className='lg:max-h-[800px] h-[80svh] ' key={index}>
                                <img className='object-cover lg:min-h-[800px] min-h-[80svh]' src={image.url} />
                                <div className='w-full h-full bg-black bg-opacity-40 absolute'></div>
                            </SwiperSlide>
                        )
                    })
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className='flex justify-center items-center'>
                <div 
                    className='absolute z-20 top-[50%] translate-y-[-50%] text-center sm:px-10 px-5'>
                    <h1 data-aos="fade-down" data-aos-duration="1000" className='md:text-5xl sm:text-4xl text-3xl font-jost font-bold text-white'>Land And Farm For Sale</h1>
                    <p data-aos="fade-down" data-aos-duration="1000" className='text-white font-jost sm:text-base text-sx font-semibold mt-4 mb-8'>Find your perfect piece of land by searching by location, price, and features.</p>
                    <div  data-aos="fade-right" data-aos-duration="1000" className='flex flex-wrap justify-center items-center gap-6'>
                        <div
                            className='text-center bg-white bg-opacity-80 rounded-3xl py-4 sm:py-6 w-[200px] md:w-[300px] shadow-2xl'>
                            <h1 className='sm:text-2xl text-lg font-bold font-jost mb-2'>Client</h1>
                            <h3 className='sm:text-xl text-base text-black font-jost font-semibold flex justify-center items-center'><SlotCounter value={2.5} /> <span> K+</span></h3>
                        </div>
                        <div
                            className='text-center bg-white bg-opacity-80 rounded-3xl py-4 sm:py-6 w-[200px] md:w-[300px] shadow-2xl'>
                            <h1 className='sm:text-2xl text-lg font-bold font-jost mb-2'>Service</h1>
                            <h3 className='sm:text-xl text-base text-black font-jost font-semibold flex justify-center items-end'><SlotCounter value={'24/7'} /></h3>
                        </div>
                        <div
                            className='text-center bg-white bg-opacity-80 rounded-3xl py-4 sm:py-6 w-[200px] md:w-[300px] shadow-2xl'>
                            <h1 className='sm:text-2xl text-lg font-bold font-jost mb-2'>Rating</h1>
                            <h3 className='sm:text-xl text-base text-black font-jost font-semibold flex justify-center items-end gap-1'><SlotCounter value={'5.00'} /><span>  ⭐</span></h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;