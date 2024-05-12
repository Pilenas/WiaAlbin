import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Tickets from './components/pages/Tickets/Tickets';
import Events from './components/pages/Events/Events';
import Navbar from './components/navbar/Navbar';
import Orders from './components/pages/orders/orders';
import SoloEvent from './components/pages/soloEvent/soloEvent';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Tickets' element={<Tickets />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/event/:eventId' element={<SoloEvent />} />
      </Routes>
    </>
  );
}

export default App;
