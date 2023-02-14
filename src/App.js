import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './Store';
import Home from './Home';
import Navbar from "./Navbar"

function App() {
  return (
    <Store>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </Store>
  );
}

export default App;
