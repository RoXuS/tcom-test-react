import React from 'react';
import './Header.css';
import Menu from './Menu';

function Header() {
  return (
    <div className="Header">
      <img
        src="https://news.ycombinator.com/y18.gif"
        alt=""
        width="18"
        height="18"
      />
      <div className="Title">Hacker News</div>
      <Menu />
    </div>
  );
}

export default Header;
