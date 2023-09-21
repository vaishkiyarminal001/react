import { Link } from "react-router-dom"
import "./Navbar.css";

export const Navbar = () =>{
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
    
    {
    path: "/login",
    Title: "Login"
    }

       
]

    return(
        <div className="navbar-container">
      {
        myLink.map((e)=>(<Link className="navbar-link" to={e.path}>{e.Title}</Link>))
      }
</div>

    )
}