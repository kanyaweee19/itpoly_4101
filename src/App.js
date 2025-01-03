import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './App.css';
import './Navbar.css'; 
import './Header.css';
import './About.css';



function App() {
  return (
    <Router>
      {/* Fragment ไม่จำเป็นต้องใช้ div หลายๆ ตัว */}
      <>
        <Header />
        <Navbar />

        {/* Main content */}
        <main className="content mt-4">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </>
    </Router>
  );
}

export default App;
