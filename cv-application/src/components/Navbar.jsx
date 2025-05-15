import React, { useState } from 'react';
import "./navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    // You can add any functionality here like opening sidebar
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">cvapplication</div>
      <button className="toggle-button" onClick={handleToggle}>
        {toggle ? '🔽' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
