import React from 'react';
import logo from '../logo.svg'; // Adjust path if your logo is elsewhere

function Home() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#222',
          padding: '15px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.1rem'
        }}
        aria-label="Main Navigation"
      >
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a href="/dashboard" style={navLinkStyle}>Dashboard</a>
          </li>
          <li>
            <span style={separatorStyle}></span>
          </li>
          <li>
            <a href="/login" style={navLinkStyle}>Login</a>
          </li>
          <li>
            <span style={separatorStyle}></span>
          </li>
          <li>
            <a href="/signup" style={navLinkStyle}>Sign Up</a>
          </li>
          <li>
            <span style={separatorStyle}></span>
          </li>
          <li>
            <a href="/gallery" style={navLinkStyle}>Gallery</a>
          </li>
          <li>
            <span style={separatorStyle}></span>
          </li>
          <li>
            <a href="/contactus" style={navLinkStyle}>Contact Us</a>
          </li>
        </ul>
      </nav>
      {/* Welcome message content */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        color: '#333',
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}>
        Welcome to our world where we grow Together!
      </div>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <img src={logo} alt="React Logo" style={{ width: '200px', height: '200px' }} />
      </div>
    </>
  );
}

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'background 0.3s',
  margin: '0 2px'
};

const separatorStyle = {
  color: '#fff',
  margin: '0 6px',
  fontWeight: 'normal'
};

export default Home;
