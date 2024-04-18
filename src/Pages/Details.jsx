import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SiteTittle from "../Components/SiteTittle/SiteTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
import { Navigation } from 'swiper/modules';

const Details = () => {

    const [data, setData] = useState({});
    const info = useLoaderData();
    const { id } = useParams();


    useEffect(() => {
        const newData = info.find(i => i.id == id);
        setData(newData);
    }, [id, info])


    const { image, category, status, price, area, location, estate_title, segment_name, description, facilities } = data;

    return (


        <div>
            <SiteTittle title={`Details | ${id}`}></SiteTittle>
            <div className="container max-w-[1170px] mx-auto w-[95%] text-p flex flex-col justify-between items-center gap-5 md:mb-[100px] mb-10">
                <div className="relative h-[500px] lg:h-[713px] w-full object-cover rounded-2xl">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-2xl">
                        {image && image.map((img, i) => ( // Corrected map syntax
                            <SwiperSlide key={i}>
                                <img src={img} className="w-full h-full object-cover block rounded-2xl" alt="" />
                                <div className='w-full h-full bg-black bg-opacity-50 absolute rounded-2xl'></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10 flex justify-center items-center mx-auto">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-white sm:text-[40px] text-[25px] font-jost">{estate_title}</h1>
                            <p className="py-5 text-white">Statue : {status}</p>
                            <div className="border-y border-white border-dashed py-3 text-white">
                                <p>Segment Name : {segment_name}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-inter sm:px-0 px-5">
                    <p className="pt-6 pb-6"><strong>description : </strong>{description}</p>
                    <div className="flex flex-col mb-5">
                        <span className="mb-2"><strong>Facilities</strong></span>
                        {
                            facilities && facilities.map((tag, index) => {
                                return (
                                    <li key={index} className="font-inter list-disc font-medium text-black sm:text-base text-xs mt-2">{tag}</li>
                                )
                            })
                        }
                    </div>
                    <div className="border-t sm:text-base text-sm border-solid flex justify-start items-center sm:gap-10 gap-4 border-[#13131326] pt-6 pb-8">
                        <div className="flex flex-col gap-3">
                            <span>Price : </span>
                            <span>Area : </span>
                            <span>Location : </span>
                            <span>Category : </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span><strong>${price}</strong></span>
                            <span><strong>{area}</strong></span>
                            <span><strong>{location}</strong></span>
                            <span><strong>{category}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;