import { useState } from "react";
import "./Todo.css";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { myAuthContext } from "./Context/AuthContextProvider";

export const Todoadd = () =>{

    const [state, setState] = useState({
        title:"",
        level:"",
        complete:false
    });

   
    
    const {login,logout,isAuth} = useContext(myAuthContext);
    // input

    const handleInput=(e) =>{
        setState({...state,[e.target.name]: e.target.value});
        
    }

    // post method
    const postHandle = () =>{

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(state),
           };
           fetch("http://localhost:3000/todo", requestOptions)
           .then((response)=> response.json())
           .then((data)=> console.log(data));

           alert("Successfully Post");
           
    }

  


    if(!isAuth){
        return <Navigate to="/login"/>
    }

    
    return(
        <div>
        <h1>Add Todos</h1>

        <input name="title" placeholder="Title" onChange={handleInput}></input>

        <input name="level" placeholder="Level" onChange={handleInput}></input>    

        <button onClick={postHandle}>Submit</button>
        </div>
        
    );
}