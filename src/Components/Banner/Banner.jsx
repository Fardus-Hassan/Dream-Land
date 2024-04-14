import React, { useEffect, useRef, useState } from 'react';
import './style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    const [images, setImages] = useState(null)

    console.log(images);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        fetch('../../../public/banner.json')
            .then(response => response.json())
            .then(data => setImages(data))
    }, [])

    return (
        <>

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
                className="mySwiper border-b-8 border-pmColor max-h-[800px] -mt-5 "
            >
                {
                    images && images.map((image, index) => {
                        return (
                            <SwiperSlide className='max-h-[800px]' key={index}>
                                <img className='object-cover max-h-[800px]' src={image.url} />
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
           
        </>
    );
};

export default Banner;