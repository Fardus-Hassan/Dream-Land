import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[72px]"></div>
            <div className="min-h-[calc(100vh-500px)] container max-w-[1440px] w-[95%] mx-auto">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;