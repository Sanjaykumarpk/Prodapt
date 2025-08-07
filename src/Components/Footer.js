function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#181818',
        color: '#fff',
        textAlign: 'center',
        padding: '24px 10px 18px 10px',
        marginTop: 'auto',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)'
      }}
    >
      <div style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
        Thank you for visiting our website!
      </div>
      <div style={{ marginBottom: '10px' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', margin: '0 10px', fontSize: '1.3rem', textDecoration: 'none' }}
          aria-label="Facebook"
        >
          <span role="img" aria-label="Facebook">👍</span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', margin: '0 10px', fontSize: '1.3rem', textDecoration: 'none' }}
          aria-label="Twitter"
        >
          <span role="img" aria-label="Twitter">🐦</span>
        </a>
        <a
          href="mailto:contact@example.com"
          style={{ color: '#fff', margin: '0 10px', fontSize: '1.3rem', textDecoration: 'none' }}
          aria-label="Email"
        >
          <span role="img" aria-label="Email">✉️</span>
        </a>
      </div>
      <div style={{ fontSize: '0.95rem', color: '#bbb' }}>
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
