import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Image from './components/Image';
import MinistryofHealth from './components/MinistryofHealth'; 
import Paramedics from './components/Paramedics';
import Policy from './components/Policy';
function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
          <Route path="/hospital" element={<Image/>}/>
          <Route path="/ministry" element={<MinistryofHealth/>}/>
          <Route path="/paramedics" element={<Paramedics/>}/>
          <Route path="/policy" element={<Policy/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
