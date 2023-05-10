import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BloodRequests } from './components/BloodRequests';
import  BloodRequest  from './components/BloodRequest';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import  SelectProduct  from "./components/SelectProduct";
import { Whole } from "./components/Whole";


export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bloodrequests' element={<BloodRequests />} />
          <Route path='/bloodrequest' element={<BloodRequest/>} />
          <Route path='/bloodrequest/:id' element={<Whole/>} />
          <Route path='/selectproduct' element={<SelectProduct/>} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
