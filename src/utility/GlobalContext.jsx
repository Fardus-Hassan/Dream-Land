import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const GlobalStateContext = createContext(null);

const GlobalContext = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);


    const register = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user1 = result.user;
                setUser(user1);
            })
            .catch((error) => {
                console.error(error);

            });
    }

    const login = (email, password) => {


        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user2 = result.user;
                setUser(user2);
                // ...
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const logout = () => {

        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.error(error);
        });
    }



    return (

        <GlobalStateContext.Provider value={{ user, register, login, logout }}>
            {children}
        </GlobalStateContext.Provider>

    );
};

export default GlobalContext;