import { useState } from "react";

export const Login = () =>{

    const [stateemail, setEmail] = useState("");
    console.log(stateemail);

    const [statepass, setPassword] = useState("");
    console.log(statepass);

    // login function
    const onEmail =(e) =>{
        setEmail(e.target.value);
    }

    const onPassword =(e) =>{
        setPassword(e.target.value);
    }

    const PostHandle = ()=>{
        if(stateemail === "admin" && statepass === "123"){
            alert("Login Successfull");
        }else {
            alert("Invalid Credatiels");
        }
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