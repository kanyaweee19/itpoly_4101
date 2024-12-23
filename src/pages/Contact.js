import React from 'react';

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <form>
                <label>ชื่อ:</label>
                <input type="text" name="name" required />
                <label>อีเมล:</label>
                <input type="email" name="email" required />
                <label>ข้อความ:</label>
                <textarea name="message" required></textarea>
                <button type="submit">ส่ง</button>
            </form>
            <p>โทร: 053-123456</p>
            <p>อีเมล: info@polytechnic.com</p>
        </div>
    );
}

export default Contact;
