import { useContext } from "react";
import { GlobalStateContext } from "../utility/GlobalContext";
import toast from "react-hot-toast";


const UpdateProfile = () => {

    const { user, updateUserProfile } = useContext(GlobalStateContext)
    

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateUserProfile(photoURL, name)
        toast.success('Save Changes');

    }

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto my-20">
            <div className=" md:flex-row flex-col gap-10 flex justify-center items-center md:py-20 py-10">
                <div className="md:border-r-2 md:border-b-0 border-b-2 border-pmColor border-dashed md:pb-0 pb-6 md:pr-10">
                    <div className="flex lg:flex-row gap-6 flex-col justify-center items-center">
                        <div>
                            <img className="rounded-[100%] h-[250px] object-cover w-[250px]" src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/64/64572.png"} alt="" />
                        </div>
                        <div className="font-jost lg:text-left text-center">
                            <h2 className="text-nowrap">Name : {user?.displayName}</h2>
                            {user?.email && <h2 className="text-nowrap">Email : {user.email}</h2>}
                        </div>
                    </div>
                </div>
                <form onSubmit={handleUpdateProfile} className="space-y-8">

                    <div className="relative w-full h-10 mb-5">
                        <input
                            defaultValue={user.displayName}
                            name="name" type="text"
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-pmColor placeholder-shown:border-t-pmColor border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] <border-pmC></border-pmC> focus:border-pmColor"
                            placeholder=" " /><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-pmColor peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Name
                        </label>
                    </div>
                    <div className="relative w-full h-10 mb-5">
                        <input
                            defaultValue={user.photoURL}
                            name="photoURL" type="text"
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-pmColor placeholder-shown:border-t-pmColor border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] <border-pmC></border-pmC> focus:border-pmColor"
                            placeholder=" " /><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-pmColor peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">PhotoURL
                        </label>
                    </div>
                    <button className="group relative w-full inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                        <span>Save</span>
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
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;