import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Paramedics from './components/Paramedics';
function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>

          <Route path="/paramedics" element={<Paramedics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
