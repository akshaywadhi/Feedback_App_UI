
import Home from "./Components/Home";

import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
   <>

<Routes>
<Route path='/' element={<Home></Home>}/>
<Route path='register' element={<Register></Register>}/>
</Routes>

 

   </>
  );
}

export default App;
