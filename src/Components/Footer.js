// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#4CAF50', padding: '10px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; 2025 วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
      <p>โทรศัพท์: 053 213 061</p>
      <p>อีเมล์: <a href="mailto:lannapoly@lannapoly.ac.th" style={{ color: 'white' }}>lannapoly@lannapoly.ac.th</a></p>
    </footer>
  );
}

export default Footer;
