import { Route, Routes } from "react-router-dom";
import { Todo } from "../Todo";
import { Todoadd } from "../Todoadd";
import { About } from "../About";
import { Contact } from "../Contact";
import { Login } from "../Login";




export const Allroutes = () =>{
    return(

        <Routes>
            <Route path="/" element={<Todo/>}></Route>
            <Route path="/addtodo" element={<Todoadd/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}