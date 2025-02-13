import { Link, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../utility/GlobalContext";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import SiteTittle from "../Components/SiteTittle/SiteTittle";



const Register = () => {

    const [showPassword, setShowPassword] =useState(false)
    const { register : regis, setUser, logout } = useContext(GlobalStateContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    
 

    const onSubmit = (data) => {
        const {name, email, password, photoURL} = data;

        if(password.length <6){
            return setError('Password should be at least 6 characters')
        }
        if (!/[A-Z]/.test(password)){
            return setError('Must have an UPPERCASE letter in the password')
        }
        if (!/[a-z]/.test(password)){
            return setError('Must have an lowercase letter in the password')
        }
        reset();
        regis(email, password).then((result) => {

            const user = result.user;
            setUser(user);
            logout()
            navigate('/login')
            

            updateProfile(auth.currentUser, {

                displayName: name,
                photoURL: photoURL

            }).then(() => {
                toast.success('Register Successfully');

            }).catch((error) => {

                setError(error.message)
            });

        })
            .catch((error) => {
  
                setError(error.message)

            });

    }




    return (
        <div data-aos="flip-left" data-aos-duration="700"
            className="flex justify-center items-center sm:mt-20 mt-10 mb-20 mx-auto w-[95%]">
            <SiteTittle title={'Register'}></SiteTittle>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl shadow-2xl sm:w-[400px] w-full w-95% py-10 px-6">
                <div className="border-b border-double border-pmColor mb-6">
                    <h1 className="text-2xl mb-5 mx-auto text-center font-jost font-semibold">Register <span className="text-pmColor">Here</span></h1>
                </div>
                <div className="relative w-full min-w-[200px] h-10 mb-5">
                    <input
                        name="name" type="text"  {...register("name", { required: true })}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                        placeholder=" " /><label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Name
                    </label>
                {errors.name && <span className="text-xs text-red-500">This Name field is required</span>}
                </div>
                <div className="relative w-full min-w-[200px] h-10 mb-5">
                    <input
                        name="email" type="email"  {...register("email", { required: true })}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                        placeholder=" " /><label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Email
                    </label>
                {errors.email && <span className="text-xs text-red-500">This Email field is required</span>}
                </div>
                <div className="relative w-full min-w-[200px] h-10 mb-5">
                    <input
                        name="photoURL" type="text" {...register("photoURL")}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                        placeholder=" " /><label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">PhotoURL
                    </label>
                </div>
                <div className="relative w-full min-w-[200px] h-10 mb-5">
                    <input
                        name="password"  {...register("password", { required: true })}
                        type={showPassword ? 'text' : 'password'}
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                        placeholder=" " /><label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Password
                    </label>
                    
                    {showPassword ? <img onClick={()=>setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt="" /> : <img onClick={()=>setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png" alt="" />}
                {errors.password && <span className="text-xs text-red-500">This Password field is required</span>}
                </div>
                {error && <span className="text-xs text-red-500">{error}</span>}
                <button className="group relative w-full inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                    <span>Register</span>
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
                <p className="text-sm mt-4 text-center text-black font-inter font-medium">Do you have account?  please <Link to='/login' className="text-pmColor font-semibold" >Login</Link> 👈</p>

            </form>
        </div>
    );
};

export default Register;