import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Register from './Components/Register';

import AddStudent from './Components/AddStudent';


function App() {
  return (
    <Router>
      <div className="App">
    
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-student" element={<AddStudent />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


