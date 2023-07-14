import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../assests/styles/navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleClose = () => setIsOpen(false);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar">
            <Navbar.Toggle 
                aria-controls="responsive-navbar-nav" 
                onClick={handleToggle} 
                className={`custom-toggler ${isOpen ? 'open' : ''}`}
            >
                <div></div>
                <div></div>
                <div></div>
            </Navbar.Toggle>
            <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
                <Nav className="overlay-content">
                    <Nav.Link as={NavLink} to="/" exact onClick={handleClose} activeClassName="active-link">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" onClick={handleClose} activeClassName="active-link">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/projects" onClick={handleClose} activeClassName="active-link">Projects</Nav.Link>
                    <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="d-none d-lg-flex">
                    <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" activeClassName="active-link">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/projects" activeClassName="active-link">Projects</Nav.Link>
                    <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;





