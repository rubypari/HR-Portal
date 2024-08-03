import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import LeavePage from './pages/LeavePage';
import NavBar from './components/NavBar';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/leaves" element={<LeavePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
