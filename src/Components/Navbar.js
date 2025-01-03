import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="navbar-brand">เว็บไซต์หลัก</Link>
        <div className="navbar-links">
          <Link to="/about">เกี่ยวกับเรา</Link>
          <Link to="/courses">หลักสูตร</Link>
          <Link to="/contact">ติดต่อเรา</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
