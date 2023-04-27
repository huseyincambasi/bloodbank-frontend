
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style/menu.css"
import {Alert, Button} from "react-bootstrap";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { Requestblood } from './components/Requestblood';
import { Donateblood } from './components/Donateblood';
import { Signup } from './components/SignUp';
import { Login } from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div >
       <Routes>
      
       
          <Route path='/' element={<Home/>}/>
        
          <Route path='/requestblood' element={<Requestblood />} />

          <Route path='/donateblood' element={<Donateblood />} />

          <Route path='/signup' element={<Signup/>} />

          <Route path='/login' element={<Login/>} />
      
      </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
