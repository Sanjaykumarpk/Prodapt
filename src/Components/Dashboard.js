import React from 'react';

function Dashboard() {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '28px 24px',
    width: '320px',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '180px'
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '12px'
  };

  const buttonStyle = {
    padding: '10px 18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    margin: '6px 8px 0 0',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s'
  };

  return (
    <div style={{
      backgroundColor: '#f4f6f9',
      minHeight: '100vh',
      padding: '32px'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#007bff',
        marginBottom: '48px',
        fontSize: '2.5rem',
        letterSpacing: '1px'
      }}>
        Welcome to Your Dashboard
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '28px'
      }}>
        <div style={cardStyle}>
          <span style={iconStyle} role="img" aria-label="user">👤</span>
          <h2 style={{ margin: '0 0 10px 0', color: '#222' }}>User Profile</h2>
          <p style={{ margin: 0 }}>Name: <b>Sanjay Kumar</b></p>
          <p style={{ margin: 0 }}>Email: <b>sanjaykumar.pk@prodapt.com</b></p>
        </div>

        <div style={cardStyle}>
          <span style={iconStyle} role="img" aria-label="bell">🔔</span>
          <h2 style={{ margin: '0 0 10px 0', color: '#222' }}>Notifications</h2>
          <ul style={{ paddingLeft: '18px', margin: 0 }}>
            <li>3 new messages</li>
            <li>Project deadline approaching</li>
            <li>Server update scheduled</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <span style={iconStyle} role="img" aria-label="link">🔗</span>
          <h2 style={{ margin: '0 0 10px 0', color: '#222' }}>Quick Links</h2>
          <button
            style={buttonStyle}
            onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
          >
            View Reports
          </button>
          <button
            style={buttonStyle}
            onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
