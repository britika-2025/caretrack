import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Residents from './pages/Residents';
import AddResident from './pages/AddResident';
import ResidentDetails from './pages/ResidentDetails';
// include bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Care Track</h1>
        </header>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/residents" element={<Residents />} />
          <Route path="/add-resident" element={<AddResident />} />
          <Route path="/residents/:id" element={<ResidentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;