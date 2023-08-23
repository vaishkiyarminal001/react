import { useState, useEffect } from "react";
import "./Product.css";

export const Product = () =>{

    const [state, setState] = useState([]);
    console.log(state);

    const [filter, setFilter] = useState("");
    console.log(filter);

    const [loading, setload] = useState(true);
   
    const [sort, setSort] = useState("");
    console.log(sort);

    const [page, setPage] = useState(1);
    console.log(page);
    
    
    useEffect(()=>{
        ProductDisplayApi();

    },[filter, loading,sort,page]);

    const ProductDisplayApi = async() =>{
        let url = `http://localhost:8080/Product`;

        // filter


        if(filter ==="Men"){
         url+="?category=men's clothing"
        }

        if(filter ==="Women"){
            url+="?category=women's clothing"
        }

        if(filter ==="Other"){
            url+="?category=jewelery"
        }


        // sort

        if(sort === "High"){
            url += "?_sort=price&_order=desc"
        }

        if(sort === "Low"){
            url += "?_sort=price&_order=asc"
        }


        const res = await fetch(url);
        const data = await res.json();
        setState(data);
        setload(false);
    }


    // loading

    if(loading){
        return(
            <img src = "https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt="error"></img>
        )
    }

    // filter
    const HandleChange = (e) =>{
        setFilter(e.target.value)
    }

    // sort
    const HandleSort = (e) =>{
        setSort(e.target.value);
    }

   




    return(
        <div>
        <h1>Amazings Products For You 😀</h1>
        <select onChange={HandleChange}>
            <option>All</option>
            <option value= "Men">Men</option>
            <option value= "Women">Women</option>
            <option value= "Other">Other</option>
        </select>

        <select onChange={HandleSort}>
            <option>Sort</option>
            <option value="High">High-Low</option>
            <option value="Low">Low-High</option>
        </select>
        
        
        <div id="cotainer">
           
            {/* mapping */}
            {
                state.map((e) =>{
                    return(
                        <div>
                       
                        <img src={e.image} alt="error" width="200px"/> 
                         <h2>{e.title}</h2>   
                         <p>price: {e.price}</p> 
                         <p>descroption: {e.descroption}</p> 
                         <p>category: {e.category}</p>
                    
                          
                        </div>


                    )

                })
            }

        </div>
{/* button */}
        <button disabled={page===1} onClick={(() =>{
            setPage(page-1);
        })}>Prev</button>

        <button >{page}</button>

        <button onClick={(() =>{
            setPage(page+1);
        })}>Next</button>

        </div>

        
    );
}