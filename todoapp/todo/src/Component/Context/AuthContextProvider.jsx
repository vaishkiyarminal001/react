import { createContext } from "react";
import { useState } from "react";

export const myAuthContext = createContext();

function AuthContextProvider({children}){

const [isAuth, setIsAuth] = useState(false);


const login = ()=>{

    setIsAuth(true);
}

const logout = ()=>{
    setIsAuth(false);
}

    return(

     <myAuthContext.Provider  value={{login, logout, isAuth}}>{children}</myAuthContext.Provider>
    )
}

export default AuthContextProvider;