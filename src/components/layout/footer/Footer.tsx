import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Koki Hoshihara. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* 必要に応じて他のソーシャルリンクを追加 */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;