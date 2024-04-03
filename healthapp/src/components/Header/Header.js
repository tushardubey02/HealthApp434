import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { FaBars, FaSearch } from 'react-icons/fa';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

function Header({ toggleMenu, isMenuOpen, closeMenu }) {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isSearchPage = location.pathname === '/search';
  const isHealthPage = location.pathname === '/healthdata';
  const isProfilePage = location.pathname === '/profile';

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  let headerTitle = "Welcome John!";
  if (isHealthPage) {
    headerTitle = "Your Health Data";
  }
  if(isProfilePage){
    headerTitle = "Profile";
  }

  return (
    <header className="header">
      {isSearchPage ? (
        <>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInput}
            className="search-input"
          />
          <FaSearch className="search-icon" />&nbsp;&nbsp;&nbsp;
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars color={isMenuOpen ? "red" : "white"} />
          </div>
        </>
      ) : (
        <>
          <div></div>
          <h1 className="title">{headerTitle}</h1>
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars color={isMenuOpen ? "red" : "white"} />
          </div>
        </>
      )}
      <NavigationMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;
