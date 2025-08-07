import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Login from './Components/Login';
import Contact from './Components/Contactus';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f4f6f9'
      }}
    >
      <BrowserRouter>
      
        <Header />
        <Home />
        <main style={{ flex: 1, padding: '0 0 32px 0' }}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
