// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>ติดต่อเรา</h1>

      {/* Contact Information */}
      <div style={{ marginBottom: '20px' }}>
        <h2>ข้อมูลการติดต่อ</h2>
        <p>ที่อยู่: 123 หมู่ 1 ตำบลช้างเผือก อำเภอเมือง จังหวัดเชียงใหม่ 50300</p>
        <p>เบอร์โทรศัพท์: 053-213061</p>
        <p>อีเมล: lannapoly@lannapoly.ac.th</p>
      </div>

      {/* Contact Form */}
      <div style={{ marginBottom: '20px' }}>
        <h2>แบบฟอร์มการติดต่อ</h2>
        <form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>ชื่อ:</label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>อีเมล:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>ข้อความ:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ส่งข้อความ
          </button>
        </form>
      </div>

      {/* Google Maps */}
      <div>
        <h2>แผนที่</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.4804561524966!2d98.97223951514262!3d18.79614358723796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aaba53ff2f9%3A0x48a1bda236aeb4a0!2z4Lit4Liy4LiH4Liy4LiZ4LmA4Lih4Liq4LmM4LiB4Lil4Lia4Liy4LiE4LmJ4LihIOC4i-C4teC4peC4suC4o-C4mA!5e0!3m2!1sth!2sth!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;