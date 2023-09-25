import { Link } from "react-router-dom"
import "./Navbar.css";
import { useContext } from "react";
import { myAuthContext } from "../Context/AuthContextProvider";

export const Navbar = () =>{

const {isAuth, logout} = useContext(myAuthContext);

const myLink=[
    {
     path:"/",
     Title: "Home"
    },

    {
    path:"/addtodo",
    Title: "Add Todos"
    },
       
    {
    path:"/about",
    Title: "About"
    },

    {
    path:"/contact",
    Title: "Contact"
    },
    
   

       
]

    return(
        <div className="navbar-container">
      {
        myLink.map((e)=>(<Link className="navbar-link" to={e.path}>{e.Title}</Link>))
      }
    

    {!isAuth ? (
  <Link className="navbar-link" to="/login">Login</Link>
) : (
  <span className="navbar-link" onClick={logout}>Logout</span>
)}
      
</div>

    )
}