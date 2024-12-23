import React from 'react';
import './Header.css';  // นำเข้าไฟล์ CSS สำหรับตกแต่ง

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">สาขาเทคโนโลยีสารสนเทศ</h1>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/courses" className="nav-link">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
