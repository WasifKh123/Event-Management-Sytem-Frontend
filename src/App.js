import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MinistryofHealth from './components/MinistryofHealth'; 
function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
          <Route path="/ministry" element={<MinistryofHealth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
