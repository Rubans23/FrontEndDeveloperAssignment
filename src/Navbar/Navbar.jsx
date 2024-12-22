import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('sessionId');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('logged_in');
    localStorage.removeItem('sessionToken');
    navigate('/');
  };

  return (
    <div className="navbardiv">
      <nav>
        <span className="nav_logo">R</span>
        <span className="nav_links">
          <p onClick={() => navigate('/home')} className="link">
            Home
          </p>
          <p className="link" onClick={() => navigate('/user')}>
            Users
          </p>
          <p className="link" onClick={() => navigate('/query')}>
            Query
          </p>
          <p className="link" onClick={handleLogout}>
            Logout
          </p>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
