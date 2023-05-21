import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Image from './components/Image';
import Policy from './components/Policy';
function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
          <Route path="/hospital" element={<Image/>}/>
          <Route path="/policy" element={<Policy/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
