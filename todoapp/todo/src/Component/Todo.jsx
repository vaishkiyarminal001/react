import { useEffect, useState } from "react";

export const Todo = () =>{

    const [state, setState] = useState([]);
    const [loading, setLoad] = useState(true);
    const [filter, setFilter] = useState("");

    // console.log(state);
    console.log(filter);

   useEffect(()=>{
        Display();

    },[loading,filter]);


    // display things function

    const Display = async() =>{
    let url=`https://jsonplaceholder.typicode.com/todos`

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

    if(loading){
        return(
            <img src="https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt=""/>
        )

    }

    return(
        <div>
        <h1>ToDo App</h1>
        <select onChange={handleFilter}>
            <option>All</option>
            <option value="truehai">Completed</option>
            <option value="falsehai">Not Completed</option>
        </select>
        <div>

            {
                state.map((e) =>{

                    return(
                        <div>
                            <h1>title : {e.title}</h1>
                            <h3>userId : {e.userId}</h3>
                            <h4>completed {e.completed ? "True" : "False"}</h4>

                        </div>
                    )
                    
                })
            }
        </div>

        </div>
    );
}
