import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css';

import {MdOutlineLogout} from "react-icons/md"

class NavBar extends React.Component{
  render(){

    return(
      <Navbar bg="light" expand="lg" sticky="top" id="navbar">
        <Container>
          <div onClick={() => window.location.href = "/"} className="logo-navbar" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/#aboutUs"}>Quem somos</Nav.Link>
              <Nav.Link href={"/#projects"}>Os nossos projetos</Nav.Link>
              <Nav.Link href={"/Contact"}>Contactar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {window.sessionStorage.getItem('login') ?  <Nav.Link className='endSessionButton' href="/log-in" onClick={() => window.sessionStorage.removeItem('login')}><MdOutlineLogout/>Terminar Sessão</Nav.Link>: null}
        </Container>
      </Navbar>
    )  
  }
}

export default NavBar;