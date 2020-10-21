import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function HL7Nav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src="/resources/applogo.png" width="40" height="40" alt="" />Visualizador de Instâncias dos Perfis do BR-Core</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default HL7Nav;