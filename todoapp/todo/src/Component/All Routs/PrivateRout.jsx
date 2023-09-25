import React from "react";
import { myAuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRout = ({children}) =>{

    const {isAuth} = useContext(myAuthContext);

    if(!isAuth){
        return <Navigate to="/login"/>
    }

    return children;
}