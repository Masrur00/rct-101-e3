import { Route, Routes } from "react-router-dom";
import  Login  from './pages/Login';
import  Home from './pages/Home';
import RequiredAuth from './hoc/RequiredAuth';

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>        
        <Route path="/login" element={<Login  />} />        
        <Route path="/" element={<RequiredAuth><Home  /></RequiredAuth>} />        
      </Routes>
    </div>
  );
}

export default App;
