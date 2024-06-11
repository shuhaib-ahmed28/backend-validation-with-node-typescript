
import './App.css';
// import Backendconnect from './components/Backendconnect';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';
import axios from 'axios'

// axios.defaults.baseURL='http://localhost:8000'
// axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      {/* <Backendconnect/> */}
       <Navigation/>
       <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/login' element={ <Login/>}/>
       </Routes>
     
    </div>
  );
}

export default App;
