import React from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap';

function Footer() {

  let mainPageRefs = ["http://localhost:3000/", "http://localhost:3000/#herosection", "http://localhost:3000/#aboutUs", "http://localhost:3000/#questions"];
  let mainPage = mainPageRefs.includes(window.location.href);

  return (
    <div className='footer-container'>
      <Nav.Link href={mainPage ? "#herosection":"/"} className='site-name'>
        Youth Dream
      </Nav.Link>
    </div>
  );
}

export default Footer;
