import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0"; // Bring menu into view
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px"; // Move menu off-screen
    }
  };

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt='Open Menu' className='nav-mob-open'/>
      
      <div className="navbar-left">
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close'/>
          <li className={menu === "home" ? 'active' : ''} onClick={() => setMenu("home")}>
            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          </li>
          <li className={menu === "allcourses" ? 'active' : ''} onClick={() => setMenu("allcourses")}>
            <Link style={{ textDecoration: 'none' }} to="/all-courses">All Courses</Link>
          </li>
          <li className={menu === "about" ? 'active' : ''} onClick={() => setMenu("about")}>
            <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
          </li>
          <li className={menu === "pricing" ? 'active' : ''} onClick={() => setMenu("pricing")}>
            <Link style={{ textDecoration: 'none' }} to="/pricing">Pricing</Link>
          </li>
          <li className={menu === "contact" ? 'active' : ''} onClick={() => setMenu("contact")}>
            <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <li className={menu === "login" ? 'active' : ''} onClick={() => setMenu("login")}>
          <Link to="/login">
            <button className='navbar-right-l'>Login</button>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
