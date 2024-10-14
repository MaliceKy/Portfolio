import React, { useState } from 'react';
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
                    <Nav.Link href="/" onClick={handleClose}>Home</Nav.Link>
                    <Nav.Link href="/about" onClick={handleClose}>About</Nav.Link>
                    <Nav.Link href="/projects" onClick={handleClose}>Projects</Nav.Link>
                    <Nav.Link href="/KyleMalice-Resume-2024.pdf" target="_blank" rel="noopener noreferrer" onClick={handleClose}>
  Resume
</Nav.Link>                   <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="d-none d-lg-flex">
                    <Nav.Link href="/" onClick={handleClose}>Home</Nav.Link>
                    <Nav.Link href="/about" onClick={handleClose}>About</Nav.Link>
                    <Nav.Link href="/projects" onClick={handleClose}>Projects</Nav.Link>
                    <Nav.Link href="/KyleMalice-Resume-2024.pdf" target="_blank" rel="noopener noreferrer" onClick={handleClose}>
  Resume
</Nav.Link>
                    <Nav.Link href="mailto:Malice.Kyle@gmail.com">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;





