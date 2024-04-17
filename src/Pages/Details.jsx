import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SiteTittle from "../Components/SiteTittle/SiteTittle";


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
        <div >
            <SiteTittle title={`Details | ${id}`}></SiteTittle>
            <div className="container max-w-[1170px] mx-auto w-[95%] text-p flex lg:flex-row flex-col justify-between items-center gap-12 md:mb-[100px] mb-10">
                <div data-aos="flip-left" data-aos-duration="700" className="lg:w-[538px] lg:h-[713px]  h-full object-cover rounded-2xl bg-red-100">
                    <img src={image} className="w-full lg:w-[538px] lg:[h-713px] h-full object-cover block rounded-2xl" alt="" />
                </div>
                <div data-aos="flip-right" data-aos-duration="700" className="sm:max-w-[50%] font-inter sm:px-0 px-5">
                    <h1 className="font-bold sm:text-[40px] text-[25px] font-jost">{estate_title}</h1>
                    <p className="py-5">Statue : {status}</p>
                    <div className="border-y border-[#13131326] border-dashed py-3">
                        <p>Segment Name : {segment_name}</p>

                    </div>
                    <p className="pt-6 pb-10"><strong>description : </strong>{description}</p>
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