import { Route, Routes } from "react-router-dom";
import { Todo } from "../Todo";
import { Todoadd } from "../Todoadd";
import { About } from "../About";
import { Contact } from "../Contact";
import { Login } from "../Login";
import { PrivateRout } from "./PrivateRout";



export const Allroutes = () =>{
    return(

        <Routes>
            <Route path="/" element={<PrivateRout><Todo/></PrivateRout>}></Route>
            <Route path="/addtodo" element={<PrivateRout><Todoadd/></PrivateRout>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}