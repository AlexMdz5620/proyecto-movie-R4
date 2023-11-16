import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Menu.css'

export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary height">
      <Container className='container-custom'>
        <div>
          <Navbar.Brand href="/">Pelis R4</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={'/comedia'} className="link">Comedia</NavLink>
              <NavLink to={'/independientes'} className="link">Independientes</NavLink>
              <NavLink to={'/clasicas'} className="link">Clasicas</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
