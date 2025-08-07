function Login() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f4f6f9'
        }}>
            <form style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                width: '320px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
                <label style={{ marginBottom: '10px', display: 'block' }}>Email</label>
                <input type="email" style={inputStyle} />

                <label style={{ marginTop: '15px', marginBottom: '10px', display: 'block' }}>Password</label>
                <input type="password" style={inputStyle} />

                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const buttonStyle = {
    width: '100%',
    marginTop: '20px',
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
};

export default Login;
