import { createContext, useState } from "react";



export const GlobalStateContext = createContext(null);

const GlobalContext = ({ children }) => {

    const [data, setData] = useState(null);

    const AllData = {
        data
    }

    return (

        <GlobalStateContext.Provider value={AllData}>
            {children}
        </GlobalStateContext.Provider>

    );
};

export default GlobalContext;