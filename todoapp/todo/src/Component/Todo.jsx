import { useEffect, useState } from "react";
import "./Todo.css"; 
import { useContext } from "react";
import {myAuthContext} from "../Component/Context/AuthContextProvider"


export const Todo = () =>{

    const [state, setState] = useState([]);
    const [loading, setLoad] = useState(true);
    const [filter, setFilter] = useState("");
    const {logout, isAuth} = useContext(myAuthContext);
    console.log(isAuth);

    // console.log(state);
    // console.log(loading);

   useEffect(()=>{
        Display();

    },[loading,filter]);


    // display things function

    const Display = async() =>{
    let url=`http://localhost:3000/todo`

    if(filter==="truehai"){
        url+="?completed=true"
    }
    if(filter==="falsehai"){
        url+="?completed=false"
    }
    
        const res = await fetch(url);
        const data = await res.json();
        setState(data);
        setLoad(false);

    }


    // filter things


    const handleFilter = (e) =>{

        setFilter(e.target.value)
    }

    // loading 
    if(loading){
        return(
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt=""/>
        )

    }

    // delete method 

    const handleDelete = (id) =>{

        fetch(`http://localhost:3000/todo/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {

          console.log(`Item with ID ${id} deleted successfully.`);
          // Optionally, update your local state or perform other actions

          setState((prevState) => prevState.filter((item) => item.id !== id));

        } else {
          console.error(`Error deleting item with ID ${id}.`);
          // Handle errors here
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });


        console.log(id);
    }

   



    return(
        <div>
        <h1>ToDo App</h1>
        <select onChange={handleFilter}>
            <option>All</option>
            <option value="truehai">Completed</option>
            <option value="falsehai">Not Completed</option>
        </select>
        {/* <button onClick={logout}>Logout</button> */}
        <div>

            {
                state.map((e) =>{

                    return(
                        <div>
                            <h2>Id : {e.id}</h2>
                            <h1>Title : {e.title}</h1>
                            <h3>Level : {e.level}</h3>
                            <h4>Completed : {e.completed ? "Yes" : "No"}</h4>

                            <button onClick={()=>{handleDelete(e.id)}}>Delete</button>

                        </div>
                    )
                    
                })
            }
        </div>

        </div>
    );
}
