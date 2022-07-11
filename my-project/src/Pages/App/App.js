import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
