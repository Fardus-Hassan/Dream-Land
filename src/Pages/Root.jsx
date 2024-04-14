import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Nav";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            
            <div className="min-h-[calc(100vh-500px)]">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;