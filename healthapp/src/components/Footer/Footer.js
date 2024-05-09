import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { FaHome, FaHeart, FaSearch, FaRunning, FaHeartbeat } from 'react-icons/fa';
import {IoIosAdd} from 'react-icons/io';

function Footer({ closeMenu }) { 
    const location = useLocation();
    
    const getIconColor = (path) => {
      return location.pathname === path ? 'red' : 'white';
    }
  
    const handleFooterItemClick = () => {
      closeMenu(); 
    };  

  return (
    <footer className="footer">
      <Link to="/" className="footer-item" onClick={handleFooterItemClick}>
        <FaHome color={getIconColor("/")} />
      </Link>
      <Link to="/search" className="footer-item" onClick={handleFooterItemClick}> 
        <FaSearch color={getIconColor("/search")} />
      </Link>
      <Link to="/healthdata" className="footer-item" onClick={handleFooterItemClick}>
        <FaHeartbeat color={getIconColor("/healthdata")} />
      </Link>
      <Link to="/exercisedata" className="footer-item" onClick={handleFooterItemClick}>
        <FaRunning color={getIconColor("/exercisedata")} />
      </Link>
      <Link to="/AddItem" className="footer-item" onClick={handleFooterItemClick}> 
        <IoIosAdd color={getIconColor("/AddItem")} />
      </Link>
    </footer>
  );
}

export default Footer;
