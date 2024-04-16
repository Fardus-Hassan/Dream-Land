import { useContext } from "react";
import { GlobalStateContext } from "../utility/GlobalContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const location = useLocation();


    const { user, loading } = useContext(GlobalStateContext);

    
    
     if (loading) {
        return <div className="flex justify-center items-center w-full mt-[200px]">
            <span className="loading loading-bars loading-lg text-pmColor"></span>
        </div>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
    }
};

export default PrivateRoute;