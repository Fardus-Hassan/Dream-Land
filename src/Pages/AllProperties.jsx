import { Link, useLoaderData } from "react-router-dom";
import Card from "../Components/Card/Card";
import SiteTittle from "../Components/SiteTittle/SiteTittle";


const AllProperties = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-[1440px] mx-auto w-[95%]">
            <SiteTittle title={'All-Properties'}></SiteTittle>
            {
                data.map((info) => {
                    const { image, id, category, status, price, area, location, estate_title, segment_name, description, facilities } = info;
                    return (
                        <div  data-aos="fade-down" data-aos-duration="1000" key={id} className=" my-10 sm:p-6">
                            <div className="lg:max-w-[450px] md:max-w-[450px] h-[350px] relative">
                                <img className="2xl:max-w-[450px] md:w-full w-full h-[350px] mx-auto object-cover" src={image[0]} alt="" />
                                <div className="absolute top-0 right-0 bg-pmColor px-3 py-1 text-white">
                                    <span className="text-xs">{status}</span>
                                </div>
                            </div>
                            <div className=" flex flex-col">
                                <div className="pl-2 h-[200px] overflow-auto">
                                    <div className="mt-4 text-left">
                                        <div className="flex justify-between items-center gap-4">
                                            <h1 className="sm:text-xl text-lg mb-3">{
                                                estate_title.length > 20 ? estate_title.slice(0, 20) + '.....' : estate_title
                                            }</h1>

                                            <h2 className="text-xs font-bold -translate-y-1 text-pmColor text-nowrap">( {segment_name} )</h2>

                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <h1 className="text-left text-sm sm:text-base">Price : ${price}</h1>
                                        <h1 className="text-sm sm:text-base">Area : {area}</h1>
                                    </div>
                                    <div className="my-3">
                                        <h1 className="text-left text-sm sm:text-base mb-3">Location : {location}</h1>
                                        {
                                            facilities.map((item, index) => {
                                                return (
                                                    <li key={index} className="text-left list-disc text-sm">{item.length > 15 ? item.slice(0, 20) + '.....' : item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="">
                                    <Link info={info} to={`/details/${id}`}>
                                        <button className="group mt-6 relative w-full inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                            <span>View Property</span>
                                            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProperties;