import React from 'react';
import './App.css';  // ถ้ามีไฟล์ CSS สำหรับตกแต่ง

function App() {
    return (
        <div className="app-container">
            {/* Header Section */}
            <Header />
            
            {/* Main Content Section */}
            <main className="main-content">
                <h2>Welcome to the IT Department</h2>
                <p>This is the main content area where you can add various sections.</p>
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default App;
