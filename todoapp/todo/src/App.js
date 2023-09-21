
import { useState } from 'react';
import './App.css';
import { Todo } from './Component/Todo';
import { Todoadd } from './Component/Todoadd';
import { Allroutes } from './Component/All Routs/Allroutes';
import { Navbar } from './Component/Navbar/Navbar';



function App() {

  // const [state, setState] = useState(false);

  // const handleButton = () => {
  //   setState(!state);
  // }
  return (
    <div className="App">
<Navbar/>
   <Allroutes/>

    {/* <button onClick={handleButton}>{state ? "Back to main" : "Add Todo"}</button>

   

{
  state ?  <Todoadd/> :  <Todo/>
} */}



      
    </div>
  );
}

export default App;
