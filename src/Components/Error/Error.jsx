import { Link } from "react-router-dom";


const Error = () => {
    return (
        <>
            <section className="relative z-10 bg-pmColor bg-opacity-80 h-svh flex justify-center items-center font-inter">
                <div className="container mx-auto">
                    <div className="mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 mt-5 md:text-[22px] font-semibold leading-tight text-white">
                                    Oops! That page can’t be found
                                </h4>
                                <Link to='/'
                                >
                                    <button className="group relative mt-6 inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                        <span>Home</span>
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
                </div>

                <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="flex h-full w-1/3">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
            </section>
        </>
    );
};

export default Error;
