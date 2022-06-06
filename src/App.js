import { Route, Routes } from "react-router-dom";
import  Login  from './pages/Login';
import  Home from './pages/Home';
import RequiredAuth from './hoc/RequiredAuth';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Login/>
      <Routes>        
        <Route path="/home" element={<RequiredAuth><Home  /></RequiredAuth>} />        
      </Routes>
    </div>
  );
}

export default App;
