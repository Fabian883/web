import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Login from "../Login/Login";

function App() {
  return(
    /*
    <body>
      <h1 className='text-3xl fond-bold'>Fabian Alonso Gonzalez Rojas B83493</h1>
    </body>
    */
    
    /* Add here new paths if needed */
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
