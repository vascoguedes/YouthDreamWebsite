import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css';

import {MdOutlineLogout} from "react-icons/md"

class NavBar extends React.Component{
  render(){

    let mainPageRefs = ["/", "/#herosection", "/#aboutUs", "/#questions"];
    let mainPage = mainPageRefs.includes(window.location.pathname);

    return(
      <Navbar bg="light" expand="lg" sticky="top" id="navbar">
        <Container>
          <Navbar.Brand href="/" className="Informado" >Youth Dream</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={mainPage ? "#herosection":"/"}>Página Inicial</Nav.Link>
              {mainPage ? <Nav.Link href={"#aboutUs"}>Quem somos</Nav.Link> : null}
              {mainPage ? <Nav.Link href={"#questions"}>Os nossos projetos</Nav.Link> : null}
            </Nav>
          </Navbar.Collapse>
          {window.sessionStorage.getItem('login') ?  <Nav.Link className='endSessionButton' href="/log-in" onClick={() => window.sessionStorage.removeItem('login')}><MdOutlineLogout/>Terminar Sessão</Nav.Link>: null}
        </Container>
      </Navbar>
    )  
  }
}

export default NavBar;