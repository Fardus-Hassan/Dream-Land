
import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-500px)] font-inter">
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;