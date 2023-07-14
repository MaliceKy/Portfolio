import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                className={`custom-toggler ${isOpen ? 'open' : ''} d-lg-none`}
            >
                <div></div>
                <div></div>
                <div></div>
            </Navbar.Toggle>
            <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
                <Nav className="overlay-content">
                    <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
                    <Nav.Link as={Link} to="/projects" onClick={handleClose}>Projects</Nav.Link>
                    <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </div>
            <div className="ms-auto d-none d-lg-block">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default NavBar;



