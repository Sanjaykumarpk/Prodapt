import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all the fields.');
      return;
    }
    setError('');
    // You can handle form submission here
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f4f6f9'
    }}>
      <div style={{
        background: '#fff',
        padding: '40px 32px',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        textAlign: 'center',
        minWidth: '340px',
        maxWidth: '95vw'
      }}>
        <h2 style={{ marginBottom: '24px', color: '#007bff', fontSize: '2rem' }}>Contact Us</h2>
        <div style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
          <p style={{ margin: '12px 0' }}>
            <span role="img" aria-label="phone" style={{ marginRight: 8 }}>📞</span>
            <strong>Phone:</strong> 9374848787
          </p>
          <p style={{ margin: '12px 0' }}>
            <span role="img" aria-label="email" style={{ marginRight: 8 }}>✉️</span>
            <strong>Email:</strong> contact@example.com
          </p>
        </div>
        <form style={{ marginTop: '24px', textAlign: 'left' }} onSubmit={handleSubmit} noValidate>
          <label style={{ display: 'block', marginBottom: 6, color: '#333' }}>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '14px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
          <label style={{ display: 'block', marginBottom: 6, color: '#333' }}>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '14px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
          <label style={{ display: 'block', marginBottom: 6, color: '#333' }}>Message</label>
          <textarea
            name="message"
            placeholder="Type your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '18px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'vertical'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
          {error && (
            <div style={{ color: 'red', marginTop: '16px', textAlign: 'center' }}>
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
