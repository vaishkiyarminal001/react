import { useState } from 'react';
import './App.css';
import { Addproduct } from './Components/Addproduct';
import { Product } from './Components/Product';

function App() {

  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div className="App">
     {/* <Product/>
     <Addproduct/> */}

     <button onClick={(() =>{

      setToggle(!toggle);

     })}>{toggle ? "Add Product" : "Show Products"}</button>

     {
      toggle ? <Product/> : <Addproduct/>
     }
    </div>
  );
}

export default App;
