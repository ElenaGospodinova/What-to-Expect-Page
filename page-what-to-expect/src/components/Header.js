import React, { useState } from 'react';
import logoImage from '../img/Bath_Spa_University.png';
import '../styles/Header.css';

const Logo = () => (
  <div className="logo">
    <a href="https://www.bathspa.ac.uk/">
      <img src={logoImage} alt="Bath Spa University Logo" className='logoBSU'/>
    </a>
  </div>
);

const SearchBar = ({ showSearch, toggleSearch }) => (
  <div className='search-site'>
    <a href="#search-site" title="Show search box" onClick={toggleSearch}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <span className='top'>{showSearch ? 'GO' : 'Search'}</span>
    </a>
    {showSearch && (
      <div className="search-bar">
        <input type="text" className='input-search' placeholder="Search Bath Spa" />
        <button type="submit" className='btn-search'></button>
      </div>
    )}
  </div>
);

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <header className="header-area" role="banner">
      <Logo />
      <div className='mobile-search'>
        <SearchBar showSearch={showSearch} toggleSearch={toggleSearch} />
      </div>
    </header>
  );
}

export default Header;
