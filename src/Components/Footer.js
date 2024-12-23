import React from 'react';
import './Footer.css';  // นำเข้าไฟล์ CSS ถ้ามีการตกแต่งเพิ่มเติม

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© 2024 สาขาเทคโนโลยีสารสนเทศ | All Rights Reserved</p>
                <div className="footer-links">
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                    <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
