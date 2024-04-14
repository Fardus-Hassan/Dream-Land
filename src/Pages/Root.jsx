
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="min-h-[calc(100vh-500px)] font-inter">
            <Outlet />
        </div>
    );
};

export default Root;