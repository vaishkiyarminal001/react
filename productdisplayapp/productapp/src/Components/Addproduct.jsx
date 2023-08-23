import { useState } from "react"

const Initaldata = {
    image : "",
    title : "",
    price : "",
    description : "",
    category : ""
};
export const Addproduct = () =>{

    const [state, setState] = useState(Initaldata);

    console.log(state);
// input
    const handleInput = ((e) =>{
        setState({...state,[e.target.name]:e.target.value});
    })

    const handlePost = (e) =>{
        e.preventDefault();
       
// post method
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(state),
           };
           fetch("http://localhost:8080/Product", requestOptions)
           .then((response)=> response.json())
           .then((data)=> console.log(data));

           alert("Successfully Post");
    }

    return(
        <div>
            <h1>Add Product Page</h1>
            <form onSubmit={handlePost}>
                <input name="image" placeholder="image_url" onChange={handleInput}></input>
                <input name="title" placeholder="Title" onChange={handleInput}></input>
                <input name="price" placeholder="Price" onChange={handleInput}></input>
                <input name="description" placeholder="Description" onChange={handleInput}></input>
                <input name="category" placeholder="Category" onChange={handleInput}></input>
                <input type="submit"></input>
                
            </form>
        </div>
    )
}


