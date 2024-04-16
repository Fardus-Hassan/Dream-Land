

const Card = ({ info }) => {


    const { image, id, category, status, price, area, location, estate_title, segment_name, description, facilities } = info;



    return (
        <div className=" mb-10 p-6 ">
            <div className="w-[450px] h-[350px] mx-auto relative">
                <img className="w-[450px] h-[350px] object-cover" src={image} alt="" />
                <div className="absolute top-0 right-0 bg-pmColor px-3 py-1 text-white">
                    <span className="text-xs">{status}</span>
                </div>
            </div>
            <div className="pl-2 flex flex-col">
                <div className="">
                    <div className="mt-4 text-left">
                        <div className="flex justify-between items-center gap-4">
                            <h1 className="text-xl mb-3">{
                                estate_title.length > 20 ? estate_title.slice(0, 20)+'.....' : estate_title
                            }</h1>

                            <h2 className="text-xs font-bold -translate-y-1 text-pmColor text-nowrap">( {segment_name} )</h2>

                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-left">Price : ${price}</h1>
                        <h1>Area : {area}</h1>
                    </div>
                    <div className="my-3">
                        <h1 className="text-left mb-3">Location : {location}</h1>
                        {
                            facilities.map((item, index) => {
                                return (
                                    <li key={index} className="text-left list-disc text-sm">{item}</li>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <button className="group mt-6 relative w-full inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                        <span>More Details</span>
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
                </div>
            </div>

        </div>
    );
};

export default Card;