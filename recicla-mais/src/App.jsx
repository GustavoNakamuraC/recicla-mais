import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>

  )

}

export default App
