import React from "react";
import {BrowserRouter,Routes,Route}  from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'
import Details from './pages/Details'
//components
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Details/:name" element={<Details/>} />
    <Route path="*" element={<Error />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
