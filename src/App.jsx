import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Router>
          {/* <Route index element={<Login />} /> */}
          <Route path="cadastro" element={<Cadastro />} />
        </Router>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
