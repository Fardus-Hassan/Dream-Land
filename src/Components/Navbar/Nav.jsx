
import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../utility/GlobalContext";





const Nav = () => {
    const { user, logout } = useContext(GlobalStateContext);


    console.log(logout);
    const [openNav, setOpenNav] = React.useState(false);

    console.log(user);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-bold"
            >
                <Link to='/'>
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-bold"
            >
                <Link to='/'>
                    Update Profile
                </Link>
            </Typography>
            {
                user && <img className="rounded-full w-10" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
            }
        </ul>
    );
    return (
        <div className="mt-5 max-h-[768px]">
            <Navbar className="fixed top-0 z-50 h-max max-w-full backdrop-blur-0 backdrop-saturate-100 border-0 shadow-none rounded-none px-4 pb-2 lg:px-8 lg:pb-4 lg:pt-4">
                <div className="flex items-center justify-between text-black">
                    <Typography

                        className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
                    >
                        <Link to='/' className="flex justify-center gap-3">
                            <span className="w-8 block"><img className="w-full" src="https://cdn-icons-png.flaticon.com/512/9101/9101314.png" alt="" /></span><span className="text-pmColor">Dream</span> Land
                        </Link>
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="items-center gap-x-1 lg:flex hidden">
                            {
                                user ? <button className="group relative inline-flex bg-[#FF7800] h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                    <span>Log Out</span>
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
                                </button> :
                                    <Link to='/login'>
                                        <button onClick={logout} className="group relative inline-flex bg-pmColor h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200">
                                            <span>Log In</span>
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
                            }
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default Nav;