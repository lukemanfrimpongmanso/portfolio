import React from 'react';
import Image2 from '../assets/linkeding.png';
import Image3 from '../assets/github.png';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <div>
      <footer className="navbar">
        <a href="#hero" className="navbar-logo">
          <div className="circle"></div>
          
          Lukeman Frimpong
        </a>
        
        <div className="scroll-and-icon">
          <div className="socials">
            <a href="linkedin">
              <span className="icon">
                <img src={Image2} alt="" srcset="" />
              </span>
            </a>

            <a href="github">
              <span className="icon">
                <span className="icon">
                  <img src={Image3} alt="" srcset="" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
