import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AllCourses from './Pages/Allcourse/CourseHome';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/login/Login';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
