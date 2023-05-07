import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BloodRequest } from './components/BloodRequest';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Table } from './components/Table';
import { AddBloodRequest } from "./components/AddBloodRequest";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bloodrequest' element={<BloodRequest />} />
          <Route path='/table' element={<Table/>} />
          <Route path='/addbloodrequest' element={<AddBloodRequest/>} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
