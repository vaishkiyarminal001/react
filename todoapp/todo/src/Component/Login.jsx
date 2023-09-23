import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { myAuthContext } from "./Context/AuthContextProvider";

export const Login = () =>{

    const [stateemail, setEmail] = useState("");
    //  console.log(stateemail);

    const [statepass, setPassword] = useState("");
    // console.log(statepass);

    const {login,isAuth} = useContext(myAuthContext);
    // console.log(isAuth)
  
    // login function
    const onEmail =(e) =>{
        setEmail(e.target.value);
    }

    const onPassword =(e) =>{
        setPassword(e.target.value);
    }

    const PostHandle = ()=>{
        if(stateemail === "admin" && statepass === "123"){
            // alert("Login Successfull");
            login(true)
          

        }else {
            alert("Invalid Credatiels");
        }
    }
    if(isAuth){
        return <Navigate to= "/"/>
    }
   
    return(
        <div>

        <h1>Welcome to the world of TODO's</h1>

        <input type="email" placeholder="Email" onChange={onEmail}></input>
        <input type="password" placeholder="Password" onChange={onPassword}></input>

        <button onClick={PostHandle}>Login</button>


        </div>
        
        
    )
}