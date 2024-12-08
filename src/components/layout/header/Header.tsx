import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#profile">プロフィール</a></li>
          <li><a href="#hobbies">趣味</a></li>
          <li><a href="#contact">連絡先</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;